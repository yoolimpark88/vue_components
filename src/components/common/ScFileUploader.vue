<template>
  <div class="sc-file-uploader">
    <div class="sc-dropzone-wrapper">
      <div class="sc-dropzone-summary">
        <div class="sc-dropzone-summary-info">
          Total
          <span class="file-count">{{ fileList.length }}</span>
          <span class="file-size" :class="{ exceed: isExceed }">
            {{ getByteSize(totalFileSize) }}
          </span>
          <span class="total-size" v-if="fileSizeLimit !== 0">
            / {{ getByteSize(fileSizeLimitByte) }}
          </span>
        </div>

        <input
          type="file"
          hidden
          ref="file"
          @change="handleFile"
          :accept="acceptedFiles"
          :multiple="multiple"
        />
        <div class="button-container">
          <slot name="leftButton"></slot>
          <sc-button small v-show="!onlyDownload" @click="addFile">{{ addLabel }}</sc-button>
          <slot name="rightButton"></slot>
        </div>
      </div>
      <!-- 파일목록이 없을 때 -->
      <div class="sc-dropzone-before" v-if="fileList.length === 0">
        <div class="sc-dropzone">
          <div class="sc-vue-dropzone">
            <div class="dz-message" v-tooltip:white.right="fileInfoTooltips">
              <span>There is no attached file</span>
              <sc-icon
                v-show="!onlyDownload"
                type="infomation-circle"
                color="dark-gray"
                size="small"
              />
            </div>
          </div>
        </div>
      </div>
      <!-- 파일목록이 있을 때 -->
      <div class="sc-dropzone-after" v-if="fileList.length > 0">
        <div class="sc-dropzone-control">
          <div class="sc-dropzone-control-info">
            <sc-checkbox
              v-model="checkAll"
              @change="onCheckAll"
              style="margin-right: 0"
            ></sc-checkbox>
            <i v-if="!onlyDownload && sortable" class="sc-icon" @click="move('up')">
              <svg
                focusable="false"
                xmlns="http://www.w3.org/2000/svg"
                width="11px"
                height="11px"
                viewBox="0 0 14.4 14.4"
              >
                <g transform="translate(-641 -376)">
                  <path d="M5 2l7 8H-2z" transform="translate(643 378)"></path>
                </g>
              </svg>
            </i>
            <i v-if="!onlyDownload && sortable" class="sc-icon" @click="move('down')">
              <svg
                focusable="false"
                xmlns="http://www.w3.org/2000/svg"
                width="11px"
                height="11px"
                viewBox="0 0 14.4 14.4"
              >
                <g transform="translate(-641 -377)">
                  <path d="M5 2l7 8H-2z" transform="rotate(180 326.5 195)"></path>
                </g>
              </svg>
            </i>
            <i v-if="!onlyDownload" @click="deleteFile" class="sc-icon">
              <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                <path
                  d="M19,2.5v2H11v-2h8M19.4,1H10.6A1.1,1.1,0,0,0,9.5,2.1V4.9A1.1,1.1,0,0,0,10.6,6h8.8a1.1,1.1,0,0,0,1.1-1.1V2.1A1.1,1.1,0,0,0,19.4,1Z"
                ></path>
                <rect x="9" y="11.9" width="1.5" height="11.38"></rect>
                <rect x="14.3" y="11.9" width="1.5" height="11.38"></rect>
                <rect x="19.5" y="11.9" width="1.5" height="11.38"></rect>
                <path
                  d="M23.1,29.6H6.9a2.8,2.8,0,0,1-2.7-2.7V5.4H5.7V26.9a1.3,1.3,0,0,0,1.3,1.3H23.1a1.3,1.3,0,0,0,1.3-1.2V5.4h1.5V26.9A2.8,2.8,0,0,1,23.1,29.6Z"
                ></path>
                <path d="M28,6.2H2A.8.8,0,0,1,2,4.7H28a.8.8,0,0,1,0,1.5Z"></path>
              </svg>
            </i>
            <sc-button size="small" :disabled="!availableDownload" @click="onClickDownload">
              {{ downloadLabel }}
            </sc-button>
          </div>
          <div class="sc-dropzone-control-btn-group">
            <i class="sc-icon" :class="{ toggled: showFiles }" @click="showFiles = !showFiles">
              <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                <polygon points="26.7 22.8 15 11.1 3.3 22.8 2.2 21.8 15 8.9 27.8 21.8 26.7 22.8" />
              </svg>
            </i>
          </div>
        </div>

        <div class="sc-filezone" v-for="(file, idx) in fileList" :key="idx" v-show="showFiles">
          <sc-checkbox v-model="file.checked" @change="onCheckFile">
            {{ file.fileName }}
          </sc-checkbox>
          <span class="sc-filezone-file-size">({{ getByteSize(file.fileSize) }})</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ScButton from '@/components/common/ScButton.vue';
import ScCheckbox from '@/components/common/ScCheckbox.vue';
import ScIcon from '@/components/common/ScIcon.vue';
import { toRaw } from 'vue';

export default {
  name: 'ScFileUploader',
  components: {
    ScButton,
    ScCheckbox,
    ScIcon,
  },
  emits: [
    'added', // 사용자가 파일을 추가한 이후 발생하는 이벤트
    'removed',
    'changed',
    'download',
    'exceed',
  ],
  props: {
    acceptedFiles: {
      type: String,
      default:
        '.jpg,.jpeg,.png,.xls,.xlsx,.xlsm,.docx,.eml,.gif,.html,.mht,.mhtml,.msg,.pdf,.pptm,.pptx,.txt',
    },
    // 정렬기능
    sortable: {
      type: Boolean,
      default: true,
    },
    // 다운로드만 가능한지 여부입니다.
    onlyDownload: {
      type: Boolean,
      default: false,
    },
    fileSizeLimit: {
      type: Number,
      default: 0,
    },
    initList: {
      type: Array,
      default: () => [],
    },
    multiple: {
      type: Boolean,
      default: true,
    },
    addLabel: {
      type: String,
      default: 'Add',
    },
    downloadLabel: {
      type: String,
      default: 'Download',
    },
    beforeAddValidation: {
      type: Function,
      default: () => {
        return true;
      },
    },
  },
  data() {
    return {
      checkAll: false,
      showFiles: true,
      fileList: [],
    };
  },
  computed: {
    fileSizeLimitByte() {
      return this.fileSizeLimit * 1024 * 1024;
    },
    totalFileSize() {
      let size = 0;
      this.fileList.forEach((file) => {
        size += file.fileSize;
      });
      return size;
    },
    availableDownload() {
      return this.fileList.some((file) => file.checked);
    },
    isExceed() {
      return this.fileSizeLimit > 0 && this.totalFileSize >= this.fileSizeLimitByte;
    },
    fileInfoTooltips() {
      if (this.onlyDownload) return;
      const html = `<div class='my-3 text-sm font-medium text-gray-600'><span class='text-[20px] text-orange-500'>*</span>${this.$t(
        '첨부 가능한 File Type은 다음과 같습니다',
      )}</div><hr><div class='my-2 text-sm/[24px] text-gray-400'> jpg, jpeg, png, xls, xlsx, xlsm, docx, eml, gif, html, mht, mhtml, msg, pdf, pptm, pptx, txt</div>`;
      return html;
    },
  },
  methods: {
    getByteSize(size) {
      const byteUnits = ['KB', 'MB', 'GB', 'TB'];
      for (let i = 0; i < byteUnits.length; i++) {
        size = Math.ceil(size / 1024);
        if (size < 1024) return Math.round(size * 10) / 10 + ' ' + byteUnits[i];
      }
    },
    onCheckAll() {
      this.fileList.forEach((file) => (file.checked = this.checkAll));
    },
    onCheckFile(val) {
      if (!val) {
        this.checkAll = false;
      }
    },
    onClickDownload() {
      const checkedFiles = this.fileList
        .filter((file) => file.checked)
        .map((file) => {
          const f = { ...file };
          delete f.checked;
          return toRaw(f);
        });
      // console.info('download', checkedFiles);
      this.$emit('download', checkedFiles);
    },
    addFile() {
      // validation 체크
      if (this.beforeAddValidation() !== true) {
        return;
      }
      // ADD 버튼 클릭 시 input file 첨부
      if (!this.onlyDownload) {
        this.$refs.file.click();
      }
    },
    deleteFile() {
      // 휴지통
      const deleteFiles = this.fileList
        .filter((file) => file.checked)
        .map((file) => {
          const f = { ...file };
          delete f.checked;
          return toRaw(f);
        });
      this.$emit('removed', deleteFiles);
      this.$emit('changed', { delete: deleteFiles });
      // console.info('delete Files', deleteFiles);
      this.fileList = this.fileList.filter((file) => !file.checked);
      if (this.checkAll) {
        this.checkAll = this.fileList.length > 0;
      }
      // console.info('file input', this.$refs.file);
      // 첨부파일 초기화 - 삭제된 파일 다시 추가할 경우를 위함
      this.$refs.file.value = '';
    },
    handleFile(event) {
      const files = [];
      // console.info('files', files);
      for (let i = 0; i < event.target.files.length; i++) {
        files.push(event.target.files[i]);
      }

      const fileNames = files.map((f) => f.name.toString().toLowerCase());
      const fileSizes = files.map((f) => f.size).reduce((a, b) => a + b, 0);

      console.info('files', files, fileSizes);
      // 파일 확장자가 맞는지 확인
      if (this.acceptedFiles !== '') {
        const acceptList = this.acceptedFiles.split(',').map((f) => f.trim().toLowerCase());

        // 파일 확장자가 일치 하지 않는 게 있는지 체크
        const invalidFile = fileNames
          .map((f) => {
            const fs = f.split('.');
            return `.${fs[fs.length - 1]}`;
          })
          .find((ext) => {
            return !acceptList.includes(ext);
          });
        if (invalidFile) {
          this.$util.alert(this.$t('허용되지 않는 파일입니다') + '<br/>' + invalidFile);
          return;
        }
      }
      const limitByte = this.$t('100');
      // 파일명 길이 체크
      const invalidFile2 = fileNames.find((fm) => {
        if (this.$util.getByte(fm) > limitByte) {
          return fm;
        }
      });
      if (this.$util.isNotEmpty(invalidFile2)) {
        this.$util.alert(
          this.$t('파일명 길이가 {0} Byte를 초과합니다. {1}<br>{2}', [
            // 메세지코드 변경필요
            limitByte,
            this.$util.getByte(invalidFile2),
            invalidFile2,
          ]),
        ); // 파일명 길이 오류
        return;
      }

      // 파일 사이즈가 초과하는지 체크
      if (this.fileSizeLimit > 0) {
        if (this.totalFileSize + fileSizes >= this.fileSizeLimitByte) {
          this.$util.alert(
            this.$t('첨부파일 용량은 {0}을 초과할수 없습니다. INPUT[{1}]', [
              this.getByteSize(this.fileSizeLimitByte),
              this.getByteSize(this.totalFileSize + fileSizes),
            ]),
          ); // 파일 용량이 초과 되었습니다.
          this.$emit('exceed', this.totalFileSize + fileSizes);
          return;
        }
      }

      files.forEach((file) => {
        this.fileList.push({
          fileName: file.name,
          fileSize: file.size,
          checked: false,
          file,
        });
      });

      // console.info('this.totalFileSize', this.totalFileSize);
      // console.info('this.getByteSize', this.getByteSize(this.totoalFileSize));

      this.$emit('added', files);
      this.$emit('changed', { added: files });
    },
    arrayMove(arr, fromIndex, toIndex) {
      const element = arr[fromIndex];
      arr.splice(fromIndex, 1);
      arr.splice(toIndex, 0, element);
    },
    move(flag) {
      const targetList = this.fileList.filter((file) => file.checked);
      if (targetList.length > 0) {
        if (flag === 'up') {
          // 위로 이동
          // 최상위라 더 이상 이동이 없음
          if (this.fileList.indexOf(targetList[0]) === 0) return;

          targetList.forEach((item) => {
            const fromIdx = this.fileList.indexOf(item);
            this.arrayMove(this.fileList, fromIdx, fromIdx - 1);
          });
        } else {
          // 아래로 이동
          // 최하단이라 더이상 이동이 없음
          if (this.fileList.indexOf(targetList[targetList.length - 1]) === this.fileList.length - 1)
            return;
          targetList.forEach((item) => {
            const fromIdx = this.fileList.indexOf(item);
            this.arrayMove(this.fileList, fromIdx, fromIdx + 1);
          });
        }
        this.$emit('changed', { moved: toRaw(this.fileList) });
      }
    },
  },
  created() {
    this.fileList = this.initList.map((file) => {
      return {
        ...file,
        checked: false,
      };
    });
  },
  watch: {
    initList(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.checkAll = false;
        // console.info('initList 값이 변경됨', newValue[0]);
        this.fileList = newValue.map((file) => {
          return {
            ...file,
            checked: false,
          };
        });
      }
    },
  },
};
</script>

<style scoped lang="scss">
.sc-file-uploader {
  display: block;
  position: relative;
  .sc-dropzone-wrapper {
    //margin: 7px 0 0 0;
    .sc-dropzone-before {
      margin: 0 0 3px 0;
      .sc-dropzone {
        border: 1px dashed $SC-COLOR-GRAY-20;
        color: $SC-COLOR-GRAY-70;
        .sc-vue-dropzone {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 36px;
          border-top-width: 1px;
          transition: none 0s ease 0s;
          max-height: 171px;
          overflow: auto;
          background: $SC-COLOR-GRAY-10;
          padding: 0;
          .dz-message {
            display: flex;
            align-items: center;
            margin: 0;
            width: fit-content;
            height: 56px;
            //line-height: 56px;
            font-size: $SC-FONT-SIZE-BODY-1;
            text-align: center;
            & > i.opus-icon-new-file {
              background: $SC-COLOR-GRAY-50;
              border-radius: 100%;
              color: $SC-COLOR-WHITE;
              height: 30px;
              width: 30px;
              font-size: 16px;
              vertical-align: -3px;
              margin-right: 10px;
              display: inline-flex;
              align-items: center;
              justify-content: center;
              cursor: pointer;
              svg {
                width: 1em;
                height: 1em;
                overflow: visible;
                fill: currentColor;
              }
            }
            span {
              margin: 0 5px 0 0;
              cursor: pointer;
            }
            i:last-of-type {
              opacity: 0.5;
              cursor: pointer;
            }
          }
        }
      }
    }

    .sc-dropzone-after {
      border-width: 1px 0;
      border-color: $SC-COLOR-GRAY-50;
      margin: 0 0 14px 0;

      .sc-dropzone-control {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        background: $SC-COLOR-GRAY-10;
        height: 38px;
        font-size: $SC-FONT-SIZE-BODY-1;
        padding: 0 5px;

        .sc-dropzone-control-info {
          display: flex;
          align-items: center;
          margin-left: 8px;
          height: inherit;
          & > i {
            margin: 0 7px;
            font-size: 11px;
            color: $SC-COLOR-GRAY-60;
            cursor: pointer;
            &:hover {
              color: $SC-COLOR-GRAY-90;
            }
          }
          & > button {
            margin: 0 0 0 10px;
          }
        }

        .sc-dropzone-control-btn-group {
          display: inline-block;
          position: absolute;
          right: 20px;
          cursor: pointer;
        }
      }

      .sc-filezone {
        display: flex;
        align-items: center;
        margin-left: 8px;
        height: 34px;
        line-height: 34px;
        padding: 0 12px 0 5px;
        background-color: transparent;
        border-top: 1px solid $SC-COLOR-GRAY-30;
        &:not(:hover) {
          background-color: $SC-COLOR-WHITE;
        }
        &:hover {
          background-color: $SC-SUB-COLOR-CYAN-TINT-01;
        }
        span {
          color: $SC-COLOR-GRAY-70;
          font-size: $SC-FONT-SIZE-BODY-1;
          margin: 0 0 0 5px;
        }
      }
    }
  }
}

.sc-dropzone-summary {
  display: flex;
  justify-content: space-between;
  position: relative;
  height: 30px;
  color: $SC-COLOR-GRAY-80;
  font-weight: 500;
  line-height: 24px;
  padding: 0;
  //margin-bottom: 8px;
  .sc-button {
    margin-bottom: 8px;
  }
  .sc-dropzone-summary-info {
    display: inline-block;
    position: relative;
    font-size: $SC-FONT-SIZE-BODY-1;
    font-weight: 400;
    color: $SC-COLOR-GRAY-90;
    margin-right: 0;
    line-height: 24px;
    .file-count {
      margin-right: 9px;
      margin-left: 2px;
      padding-right: 11px;
      position: relative;
      color: $SC-PRIMARY-COLOR-BLUE;
      font-weight: bold;
    }
    .file-count:after {
      content: '';
      background: $SC-COLOR-GRAY-40;
      position: absolute;
      top: 3px;
      right: -3px;
      width: 1px;
      height: 14px;
    }
    .file-size {
      &.exceed {
        color: $COLOR-STATUS-ERROR;
      }
    }
    .total-size {
      font-weight: 100;
      color: $SC-COLOR-GRAY-80;
    }
  }
}

.sc-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: inherit;
  font-size: inherit;
  transition: transform 0.3s ease;
  svg {
    width: 1em;
    height: 1em;
    overflow: visible;
    fill: currentcolor;
  }
  &.toggled {
    transform: rotate(180deg);
    /* 화살표 180도 회전 */
  }
}

.button-container {
  display: flex;
}
</style>
