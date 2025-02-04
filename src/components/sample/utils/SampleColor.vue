<template>
  <div>
    <div class="colors" v-for="item in colors" :key="item.title">
      <div class="title">{{ item.title }}</div>
      <div
        class="color-box-container flex flex-wrap gap-3"
        :style="{ width: `${item.rows * 200 + item.rows * 10}px` }"
      >
        <div
          class="color-box"
          v-for="(color, key) in item.codes"
          :key="key"
          :style="{ backgroundColor: color, color: getFontCode(color) }"
        >
          <div class="color-key cursor-pointer" @click="copyClipboard(key)">
            {{ key }}
          </div>
          <div class="color-code cursor-pointer" @click="copyClipboard(color)">
            {{ color }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SampleColor',
  data() {
    return {
      colors: [
        {
          title: 'Primary Color',
          codes: {
            '$SC-PRIMARY-COLOR-BLUE': '#2584da',
            '$SC-PRIMARY-COLOR-LIGHT-BLUE': '#00abd6',
            '$SC-PRIMARY-COLOR-PURPLE': '#553ca5',
            '$SC-PRIMARY-COLOR-INDIGO': '#124e83',
            '$SC-PRIMARY-COLOR-DEEP-BLUE': '#2949b3',
            '$SC-PRIMARY-COLOR-CYAN': '#0498dc',
            '$SC-PRIMARY-COLOR-MINT': '#0aacbe',
            '$SC-PRIMARY-COLOR-GREEN': '#2da379',
            '$SC-PRIMARY-COLOR-LIME': '#7ab342',
            '$SC-PRIMARY-COLOR-YELLOW': '#fbb41a',
            '$SC-PRIMARY-COLOR-ORANGE': '#eb702d',
            '$SC-PRIMARY-COLOR-RED': '#d5383a',
            '$SC-PRIMARY-COLOR-DARK-GRAY': '#575757',
            '$SC-PRIMARY-COLOR-COOL-GRAY': '#687182',
          },
        },
        {
          title: 'Greyscale Color Set',
          codes: {
            '$SC-COLOR-BLACK': '#000',
            '$SC-COLOR-GRAY-90': '#333333',
            '$SC-COLOR-GRAY-80': '#5a5a5a',
            '$SC-COLOR-GRAY-70': '#7d7d7d',
            '$SC-COLOR-GRAY-60': '#868686',
            '$SC-COLOR-GRAY-50': '#a5a5a5',
            '$SC-COLOR-GRAY-40': '#c7c7c7',
            '$SC-COLOR-GRAY-30': '#ddd',
            '$SC-COLOR-GRAY-20': '#eaeaea',
            '$SC-COLOR-GRAY-10': '#f5f5f5',
            '$SC-COLOR-WHITE': '#fff',
          },
        },
        {
          title: 'Sub Color',
          rows: 5,
          codes: {
            '$SC-SUB-COLOR-PURPLE-TINT-01': '#edebf6',
            '$SC-SUB-COLOR-PURPLE-TINT-02': '#ddd8ed',
            '$SC-SUB-COLOR-PURPLE-TINT-03': '#bbb1db',
            '$SC-SUB-COLOR-PURPLE-TINT-04': '#998ac9',
            '$SC-SUB-COLOR-PURPLE-TINT-05': '#7763b7',
            '$SC-SUB-COLOR-PURPLE-SHADE-01': '#443084',
            '$SC-SUB-COLOR-PURPLE-SHADE-02': '#3b2a73',
            '$SC-SUB-COLOR-PURPLE-SHADE-03': '#332463',
            '$SC-SUB-COLOR-PURPLE-SHADE-04': '#2a1e52',
            '$SC-SUB-COLOR-PURPLE-SHADE-05': '#221842',

            '$SC-SUB-COLOR-INDIGO-TINT-01': '#eeeff8',
            '$SC-SUB-COLOR-INDIGO-TINT-02': '#d6d8ed',
            '$SC-SUB-COLOR-INDIGO-TINT-03': '#adb1db',
            '$SC-SUB-COLOR-INDIGO-TINT-04': '#848ac9',
            '$SC-SUB-COLOR-INDIGO-TINT-05': '#5b63b7',
            '$SC-SUB-COLOR-INDIGO-SHADE-01': '#283084',
            '$SC-SUB-COLOR-INDIGO-SHADE-02': '#232a73',
            '$SC-SUB-COLOR-INDIGO-SHADE-03': '#1e2463',
            '$SC-SUB-COLOR-INDIGO-SHADE-04': '#191e52',
            '$SC-SUB-COLOR-INDIGO-SHADE-05': '#141842',

            '$SC-SUB-COLOR-DEEP-BLUE-TINT-01': '#e9ecf7',
            '$SC-SUB-COLOR-DEEP-BLUE-TINT-02': '#d4daf0',
            '$SC-SUB-COLOR-DEEP-BLUE-TINT-03': '#a9b6e1',
            '$SC-SUB-COLOR-DEEP-BLUE-TINT-04': '#7e91d1',
            '$SC-SUB-COLOR-DEEP-BLUE-TINT-05': '#536dc2',
            '$SC-SUB-COLOR-DEEP-BLUE-SHADE-01': '#213a8f',
            '$SC-SUB-COLOR-DEEP-BLUE-SHADE-02': '#1d337d',
            '$SC-SUB-COLOR-DEEP-BLUE-SHADE-03': '#192c6c',
            '$SC-SUB-COLOR-DEEP-BLUE-SHADE-04': '#142459',
            '$SC-SUB-COLOR-DEEP-BLUE-SHADE-05': '#0c1533',

            '$SC-SUB-COLOR-BLUE-TINT-01': '#e8effa',
            '$SC-SUB-COLOR-BLUE-TINT-02': '#d2dff5',
            '$SC-SUB-COLOR-BLUE-TINT-03': '#a5bfea',
            '$SC-SUB-COLOR-BLUE-TINT-04': '#789fe0',
            '$SC-SUB-COLOR-BLUE-TINT-05': '#4b7fd5',
            '$SC-SUB-COLOR-BLUE-SHADE-01': '#184ca3',
            '$SC-SUB-COLOR-BLUE-SHADE-02': '#15428e',
            '$SC-SUB-COLOR-BLUE-SHADE-03': '#12397a',
            '$SC-SUB-COLOR-BLUE-SHADE-04': '#0f2f65',
            '$SC-SUB-COLOR-BLUE-SHADE-05': '#0c2651',

            '$SC-SUB-COLOR-LIGHT-BLUE-TINT-01': '#e5f1fb',
            '$SC-SUB-COLOR-LIGHT-BLUE-TINT-02': '#cde4f6',
            '$SC-SUB-COLOR-LIGHT-BLUE-TINT-03': '#9acaee',
            '$SC-SUB-COLOR-LIGHT-BLUE-TINT-04': '#68afe6',
            '$SC-SUB-COLOR-LIGHT-BLUE-TINT-05': '#3694dd',
            '$SC-SUB-COLOR-LIGHT-BLUE-SHADE-01': '#046dbd',
            '$SC-SUB-COLOR-LIGHT-BLUE-SHADE-02': '#035ea3',
            '$SC-SUB-COLOR-LIGHT-BLUE-SHADE-03': '#034f8a',
            '$SC-SUB-COLOR-LIGHT-BLUE-SHADE-04': '#024170',
            '$SC-SUB-COLOR-LIGHT-BLUE-SHADE-05': '#023257',

            '$SC-SUB-COLOR-CYAN-TINT-01': '#e5f5fc',
            '$SC-SUB-COLOR-CYAN-TINT-02': '#cceaf8',
            '$SC-SUB-COLOR-CYAN-TINT-03': '#9ad6f1',
            '$SC-SUB-COLOR-CYAN-TINT-04': '#68c1ea',
            '$SC-SUB-COLOR-CYAN-TINT-05': '#36ace3',
            '$SC-SUB-COLOR-CYAN-SHADE-01': '#037ab0',
            '$SC-SUB-COLOR-CYAN-SHADE-02': '#036a9a',
            '$SC-SUB-COLOR-CYAN-SHADE-03': '#025b84',
            '$SC-SUB-COLOR-CYAN-SHADE-04': '#024b6d',
            '$SC-SUB-COLOR-CYAN-SHADE-05': '#023d58',

            '$SC-SUB-COLOR-MINT-TINT-01': '#e6f7f9',
            '$SC-SUB-COLOR-MINT-TINT-02': '#ceeef2',
            '$SC-SUB-COLOR-MINT-TINT-03': '#9ddee5',
            '$SC-SUB-COLOR-MINT-TINT-04': '#6ccdd8',
            '$SC-SUB-COLOR-MINT-TINT-05': '#3bbccb',
            '$SC-SUB-COLOR-MINT-SHADE-01': '#088a98',
            '$SC-SUB-COLOR-MINT-SHADE-02': '#077885',
            '$SC-SUB-COLOR-MINT-SHADE-03': '#066772',
            '$SC-SUB-COLOR-MINT-SHADE-04': '#05555e',
            '$SC-SUB-COLOR-MINT-SHADE-05': '#04454c',

            '$SC-SUB-COLOR-GREEN-TINT-01': '#e9f6f1',
            '$SC-SUB-COLOR-GREEN-TINT-02': '#d5ede4',
            '$SC-SUB-COLOR-GREEN-TINT-03': '#abdac9',
            '$SC-SUB-COLOR-GREEN-TINT-04': '#81c8ae',
            '$SC-SUB-COLOR-GREEN-TINT-05': '#57b593',
            '$SC-SUB-COLOR-GREEN-SHADE-01': '#248361',
            '$SC-SUB-COLOR-GREEN-SHADE-02': '#1f7054',
            '$SC-SUB-COLOR-GREEN-SHADE-03': '#1b6249',
            '$SC-SUB-COLOR-GREEN-SHADE-04': '#16513c',
            '$SC-SUB-COLOR-GREEN-SHADE-05': '#124130',

            '$SC-SUB-COLOR-LIME-TINT-01': '#f1f7eb',
            '$SC-SUB-COLOR-LIME-TINT-02': '#e4f0d9',
            '$SC-SUB-COLOR-LIME-TINT-03': '#cae1b3',
            '$SC-SUB-COLOR-LIME-TINT-04': '#afd18d',
            '$SC-SUB-COLOR-LIME-TINT-05': '#94c267',
            '$SC-SUB-COLOR-LIME-SHADE-01': '#628f35',
            '$SC-SUB-COLOR-LIME-SHADE-02': '#557d2e',
            '$SC-SUB-COLOR-LIME-SHADE-03': '#496c28',
            '$SC-SUB-COLOR-LIME-SHADE-04': '#3d5921',
            '$SC-SUB-COLOR-LIME-SHADE-05': '#31471a',

            '$SC-SUB-COLOR-YELLOW-TINT-01': '#fff7e7',
            '$SC-SUB-COLOR-YELLOW-TINT-02': '#fef0d1',
            '$SC-SUB-COLOR-YELLOW-TINT-03': '#fde1a3',
            '$SC-SUB-COLOR-YELLOW-TINT-04': '#fcd275',
            '$SC-SUB-COLOR-YELLOW-TINT-05': '#fbc347',
            '$SC-SUB-COLOR-YELLOW-SHADE-01': '#e0a016',
            '$SC-SUB-COLOR-YELLOW-SHADE-02': '#c78e14',
            '$SC-SUB-COLOR-YELLOW-SHADE-03': '#ad7c11',
            '$SC-SUB-COLOR-YELLOW-SHADE-04': '#946a0f',
            '$SC-SUB-COLOR-YELLOW-SHADE-05': '#64480a',

            '$SC-SUB-COLOR-ORANGE-TINT-01': '#fdf0e9',
            '$SC-SUB-COLOR-ORANGE-TINT-02': '#fbe2d5',
            '$SC-SUB-COLOR-ORANGE-TINT-03': '#f7c6ab',
            '$SC-SUB-COLOR-ORANGE-TINT-04': '#f3a981',
            '$SC-SUB-COLOR-ORANGE-TINT-05': '#ef8d57',
            '$SC-SUB-COLOR-ORANGE-SHADE-01': '#ca5304',
            '$SC-SUB-COLOR-ORANGE-SHADE-02': '#b04806',
            '$SC-SUB-COLOR-ORANGE-SHADE-03': '#983e08',
            '$SC-SUB-COLOR-ORANGE-SHADE-04': '#7e3407',
            '$SC-SUB-COLOR-ORANGE-SHADE-05': '#5e2d12',

            '$SC-SUB-COLOR-RED-TINT-01': '#fbeaeb',
            '$SC-SUB-COLOR-RED-TINT-02': '#f6d7d8',
            '$SC-SUB-COLOR-RED-TINT-03': '#eeafb0',
            '$SC-SUB-COLOR-RED-TINT-04': '#e68889',
            '$SC-SUB-COLOR-RED-TINT-05': '#de6061',
            '$SC-SUB-COLOR-RED-SHADE-01': '#ab2d2e',
            '$SC-SUB-COLOR-RED-SHADE-02': '#952729',
            '$SC-SUB-COLOR-RED-SHADE-03': '#802223',
            '$SC-SUB-COLOR-RED-SHADE-04': '#6a1c1d',
            '$SC-SUB-COLOR-RED-SHADE-05': '#551617',

            '$SC-SUB-COLOR-DARK-GRAY-TINT-01': '#edeeef',
            '$SC-SUB-COLOR-DARK-GRAY-TINT-02': '#dddddf',
            '$SC-SUB-COLOR-DARK-GRAY-TINT-03': '#bbbcc0',
            '$SC-SUB-COLOR-DARK-GRAY-TINT-04': '#999aa0',
            '$SC-SUB-COLOR-DARK-GRAY-TINT-05': '#777880',
            '$SC-SUB-COLOR-DARK-GRAY-SHADE-01': '#44464e',
            '$SC-SUB-COLOR-DARK-GRAY-SHADE-02': '#3b3d44',
            '$SC-SUB-COLOR-DARK-GRAY-SHADE-03': '#33343a',
            '$SC-SUB-COLOR-DARK-GRAY-SHADE-04': '#2a2b30',
            '$SC-SUB-COLOR-DARK-GRAY-SHADE-05': '#222327',

            '$SC-SUB-COLOR-COOL-GRAY-TINT-01': '#eff0f2',
            '$SC-SUB-COLOR-COOL-GRAY-TINT-02': '#e1e2e6',
            '$SC-SUB-COLOR-COOL-GRAY-TINT-03': '#c2c6cd',
            '$SC-SUB-COLOR-COOL-GRAY-TINT-04': '#a4a9b4',
            '$SC-SUB-COLOR-COOL-GRAY-TINT-05': '#868d9b',
            '$SC-SUB-COLOR-COOL-GRAY-SHADE-01': '#535a68',
            '$SC-SUB-COLOR-COOL-GRAY-SHADE-02': '#494f5b',
            '$SC-SUB-COLOR-COOL-GRAY-SHADE-03': '#3f444e',
            '$SC-SUB-COLOR-COOL-GRAY-SHADE-04': '#343840',
            '$SC-SUB-COLOR-COOL-GRAY-SHADE-05': '#2b2f36',
          },
        },
        {
          title: 'Point Color',
          rows: 5,
          codes: {
            '$SC-POINT-COLOR-PURPLE-1': '#3bcdc7',
            '$SC-POINT-COLOR-PURPLE-2': '#77a8f2',

            '$SC-POINT-COLOR-INDIGO-1': '#39b5e9',
            '$SC-POINT-COLOR-INDIGO-2': '#5d5f69',

            '$SC-POINT-COLOR-DEEP-BLUE-1': '#3bcdc7',
            '$SC-POINT-COLOR-DEEP-BLUE-2': '#17b675',
            '$SC-POINT-COLOR-DEEP-BLUE-3': '#1e8984',
            '$SC-POINT-COLOR-DEEP-BLUE-4': '#193355',

            '$SC-POINT-COLOR-BLUE-1': '#09bfb7',
            '$SC-POINT-COLOR-BLUE-2': '#3cbef5',
            '$SC-POINT-COLOR-BLUE-3': '#99a2b2',
            '$SC-POINT-COLOR-BLUE-4': '#3d4860',

            '$SC-POINT-COLOR-LIGHT-BLUE-1': '#0acac1',
            '$SC-POINT-COLOR-LIGHT-BLUE-2': '#47c792',
            '$SC-POINT-COLOR-LIGHT-BLUE-3': '#284b80',

            '$SC-POINT-COLOR-CYAN-1': '#0f7671',
            '$SC-POINT-COLOR-CYAN-2': '#cebda0',
            '$SC-POINT-COLOR-CYAN-3': '#2a3e5f',

            '$SC-POINT-COLOR-MINT-1': '#c2e260',
            '$SC-POINT-COLOR-MINT-2': '#284b80',
            '$SC-POINT-COLOR-MINT-3': '#99a2b2',

            '$SC-POINT-COLOR-GREEN-1': '#c2e260',
            '$SC-POINT-COLOR-GREEN-2': '#363874',

            '$SC-POINT-COLOR-LIME-1': '#6091db',
            '$SC-POINT-COLOR-LIME-2': '#c6b189',
            '$SC-POINT-COLOR-LIME-3': '#99a2b2',

            '$SC-POINT-COLOR-YELLOW-1': '#2a3e5f',
            '$SC-POINT-COLOR-YELLOW-2': '#a7a19e',

            '$SC-POINT-COLOR-ORANGE-1': '#363874',
            '$SC-POINT-COLOR-ORANGE-2': '#b8aa98',

            '$SC-POINT-COLOR-RED-1': '#3e3d53',
            '$SC-POINT-COLOR-RED-2': '#b8aa98',
            '$SC-POINT-COLOR-RED-3': '#99a2b2',

            '$SC-POINT-COLOR-DARK-GRAY-1': '#6091db',
            '$SC-POINT-COLOR-DARK-GRAY-2': '#3c6197',
            '$SC-POINT-COLOR-DARK-GRAY-3': '#aa8777',

            '$SC-POINT-COLOR-COOL-GRAY-1': '#3bcdc7',
            '$SC-POINT-COLOR-COOL-GRAY-2': '#4b88e5',
            '$SC-POINT-COLOR-COOL-GRAY-3': '#b8aa98',
          },
        },
        {
          title: 'Status Color',
          codes: {
            '$COLOR-STATUS-SUCCESS': '#4fce67',
            '$COLOR-STATUS-ERROR': '#ff5858',
            '$COLOR-STATUS-DEFAULT': '#959595',
            '$COLOR-STATUS-PROCESSING': '#336aff',
            '$COLOR-STATUS-WARNING': '#f7a443',
          },
        },
      ],
    };
  },
  methods: {
    getFontCode(hex) {
      const hexCode = hex.charAt(0) === '#' ? hex.slice(1, 7) : hex;

      const hexR = parseInt(hexCode.slice(0, 2), 16);
      const hexG = parseInt(hexCode.slice(2, 4), 16);
      const hexB = parseInt(hexCode.slice(4, 6), 16);
      // Gets the average value of the colors
      const contrastRatio = (hexR + hexG + hexB) / (255 * 3);

      return contrastRatio >= 0.5 ? 'black' : 'white';
    },

    copyClipboard(text) {
      this.$util.copyToClipboard(text, () => {
        this.$util.alert(`[${text}] 복사되었습니다.`);
      });
    },
  },
};
</script>

<style scoped lang="scss">
.title {
  font-size: 20px;
  margin: 40px 0 20px;
}
.color-box {
  width: 200px;
  height: 80px;
  padding: 15px;
  border-radius: 10px;
}
.color-key {
  font-size: $SC-FONT-SIZE-BODY-1;
}
.color-code {
  font-size: $SC-FONT-SIZE-BODY-1;
  opacity: 0.8;
}
</style>
