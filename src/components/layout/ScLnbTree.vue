<template>
	<div :class="['sc-lnb-Tree', { 'collapsed': isCollapsed }]">
    <button v-if="showLnbToggleBtn" :class="['sc-lnb-toggle-btn', { 'collapsed': isCollapsed }]" @click="toggleMenu"></button>
    <h1 class="sc-lnb-logo">
      <a href="/">UI Docs.</a>
      <span class="sc-lnb-ver-badge">Vue3</span>
    </h1>
    <div v-if="showMenuSearch" class="sc-lnb-search">
      <input type='text' v-model="menuSearchText" class="searchInput" @input="toggleClearButton" @keydown.esc="clearText" placeholder="Menu Search..." />
      <button v-if="menuSearchText" class="menuSearchClose" @click="clearText">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="#959595"
          class="w-[20px] h-[20px]"
        >
          <path
            d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"
          />
        </svg>
      </button>
    </div>
    <ul class="sc-lnb-list">
      <li v-for="(menu, index) in filteredMenus" :key="index">
        <div :class="['sc-lnb-tree-item', { 'active': menu.isOpen }]" @click="handleMenuClick(menu, index)">
          {{ menu.name }}
          <span v-if="menu.submenus && menu.submenus.length" :class="['sc-lnb-arrow', { 'rotate': menu.isOpen }]"></span>
        </div>
        <ul v-if="menu.isOpen && menu.submenus && menu.submenus.length" class="sc-lnb-subtree">
          <li v-for="(submenu, subIndex) in menu.submenus" :key="subIndex">
            <div class="sc-lnb-subtree-item" @click="submenu.routerUrl ? navigateToRoute(submenu.routerUrl) : toggleSubSubmenu(index, subIndex)">
              {{ submenu.name }}
              <span v-if="submenu.subsubmenus && submenu.subsubmenus.length" :class="['sc-lnb-sub-arrow', { 'rotate': submenu.isOpen }]"></span>
            </div>
            <ul v-if="submenu.isOpen && submenu.subsubmenus && submenu.subsubmenus.length" class="sc-lnb-sub-in-tree">
              <li v-for="(subsubmenu, subSubIndex) in submenu.subsubmenus" :key="subSubIndex" @click="subsubmenu.routerUrl && navigateToRoute(subsubmenu.routerUrl)">
                {{ subsubmenu.name }}
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
    <footer>Vue3 Components @2025</footer>
  </div>
</template>

<script>
export default {
  name: 'ScLnbTree',
  props: {
    showLnbToggleBtn: {
      type: Boolean,
      default: true, // 기본값을 설정
    },
    showMenuSearch: {
      type: Boolean,
      default: false, // 기본값을 설정
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    escClear: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      isCollapsed: false,
      menuSearchText: '',
      menus: [
        {
          name: 'Overview',
          isOpen: false,
          routerUrl:'sampleOverview'
        },
        {
          name: 'Components',
          isOpen: false,
          submenus: [
            {
              name: 'Input Form & button',
              isOpen: false,
              subsubmenus: [
                { name: 'Button', routerUrl:'sampleButton' },
                { name: 'ButtonWrapper', routerUrl:'sampleButtonWrapper' },
                { name: 'Checkbox', routerUrl:'sampleCheckbox' },
                { name: 'CheckboxWrapper', routerUrl:'sampleCheckboxWrapper' },
                { name: 'InputChip', routerUrl:'sampleInputChip' },
                { name: 'Dropdown', routerUrl:'sampleDropdown' },
                { name: 'FormBox', routerUrl:'sampleFormBox' },
                { name: 'FormItem', routerUrl:'sampleFormItem' },
                { name: 'Radio', routerUrl:'sampleRadio' },
                { name: 'MultiDropdown', routerUrl:'sampleMultiDropdown' },
                { name: 'TextArea', routerUrl:'sampleTextArea' },
                { name: 'TextField', routerUrl:'sampleTextField' },
              ],
            },
            {
              name: 'Navi & Pagination',
              isOpen: false,
              subsubmenus: [
                { name: 'Pagination', routerUrl:'samplePagination' },
                { name: 'Tab', routerUrl:'sampleTab' },
              ],
            },
            {
              name: 'Data Display',
              isOpen: false,
              subsubmenus: [
                { name: 'Table', routerUrl:'sampleTable' },
                { name: 'Tree', routerUrl:'sampleTree' },
                { name: 'Tag', routerUrl:'sampleTag' },
              ],
            },
            {
              name: 'Notifications & Feedback',
              isOpen: false,
              subsubmenus: [
                { name: 'Alert', routerUrl:'sampleAlert' },
                { name: 'Badge', routerUrl:'sampleBadge' },
                { name: 'Confirm', routerUrl:'sampleConfirm' },
                { name: 'HelpText', routerUrl:'sampleHelpText' },
                { name: 'Modal', routerUrl:'sampleModal' },
                { name: 'Tooltip', routerUrl:'sampleTooltip' },
              ],
            },
            {
              name: 'Layout & Visuals',
              isOpen: false,
              subsubmenus: [
                { name: 'Icon', routerUrl:'sampleIcon' },
              ],
            },
            {
              name: 'Control & Picker',
              isOpen: false,
              subsubmenus: [
                { name: 'ColorPicker', routerUrl:'sampleColorPicker' },
                { name: 'Datepicker', routerUrl:'sampleDatepicker' },
                { name: 'DateRangePicker', routerUrl:'sampleDateRangePicker' },
                { name: 'ScrollSpy', routerUrl:'sampleScrollSpy' },
              ],
            },
            {
              name: 'Special Features',
              isOpen: false,
              subsubmenus: [
                { name: 'Accordion', routerUrl:'sampleAccordion' },
                { name: 'FileForm', routerUrl:'sampleFileForm' },
                { name: 'SearchBox', routerUrl:'sampleSearchBox' },
                { name: 'Validator', routerUrl:'sampleValidator' },
              ],
            },
          ]
        },
      ],
    };
  },
  computed: {
    filteredMenus() {
      if (!this.menuSearchText) {
        return this.menus;
      }

      const searchText = this.menuSearchText.toLowerCase();

      return this.menus.map(menu => {
        let menuMatch = menu.name.toLowerCase().includes(searchText);
        let newMenu = { ...menu, submenus: [], isOpen: menuMatch || menu.isOpen };

        (menu.submenus || []).forEach(submenu => {
          let submenuMatch = submenu.name.toLowerCase().includes(searchText);
          let newSubmenu = { ...submenu, subsubmenus: [], isOpen: submenuMatch || submenu.isOpen };

          (submenu.subsubmenus || []).forEach(subsubmenu => {
            if (subsubmenu.name.toLowerCase().includes(searchText)) {
              newSubmenu.subsubmenus.push(subsubmenu);
              newSubmenu.isOpen = true;
              newMenu.isOpen = true;
            }
          });

          if (newSubmenu.subsubmenus.length > 0 || submenuMatch) {
            newMenu.submenus.push(newSubmenu);
          }
        });

        return newMenu;
      });
    },
  },
  methods: {
    toggleMenu() {
      this.isCollapsed = !this.isCollapsed;
    },
    // 메뉴 클릭 처리
    handleMenuClick (menu, index) {
      if (menu.routerUrl) {
        this.navigateToRoute(menu.routerUrl);
      } else if (menu.submenus && menu.submenus.length) {
        this.toggleSubmenu(index);
      }
    },
    toggleSubmenu(index) {
      this.menus.forEach((menu, i) => {
        if (i !== index) menu.isOpen = false;
      });
      this.menus[index].isOpen = !this.menus[index].isOpen;
    },
    toggleSubSubmenu(index, subIndex) {
      this.menus[index].submenus[subIndex].isOpen = !this.menus[index].submenus[subIndex].isOpen;
    },
    navigateToRoute(routerUrl) {
      console.log(`Navigating to: ${routerUrl}`);
      // routerUrl 이벤트를 부모로 emit
      this.$emit('navigate', routerUrl);
    },
    toggleClearButton() {
      return this.menuSearchText ? true : false;
    },
    clearText() {
      this.menuSearchText = '';
    }
  },
};
</script>

<style scoped lang="scss">
.sc-lnb-Tree {
  background-color: $SC-COLOR-TYPE2-WHITE;
  border-right: 1px solid $SC-COLOR-TYPE2-GRAY-30;
  overflow: visible;
  position:relative; 
  transition: width 0.3s ease;
  width: 300px;
  height: 100vh;
  &.collapsed {
    width: 20px;
    h1.sc-lnb-logo,
    .sc-lnb-search,
    .sc-lnb-list, 
    footer, {
      display:none;
    }
  }
  h1 {
    color: $SC-COLOR-TYPE2-GRAY-100;
    font-size: $SC-FONT-SIZE-TYPE2-H1;
    font-weight: $SC-FONT-WEIGHT-TYPE2-H1;
    &.sc-lnb-logo {
      height: 98px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding-left: 30px;
    }
    .sc-lnb-ver-badge {
      background: $SC-SECONDARY-COLOR-TYPE2;
      border-radius: 1rem;
      color: $SC-COLOR-TYPE2-WHITE;
      font-size:11px;
      font-weight: bold;
      padding:2px 9px;
      margin:9px 0 0 6px;
    }
  }
  .sc-lnb-toggle-btn {
    background-color: $SC-COLOR-TYPE2-GRAY-10;
    background-image: url(../../assets/img/ico-chevron-right-14.png);
    background-position: center;
    background-repeat: no-repeat;
    border:1px solid $SC-COLOR-TYPE2-GRAY-30;
    border-radius: 50%;
    cursor: pointer;
    position: absolute;
    top:35px;
    right:-15px;
    transform: rotate(180deg);
    width: 30px;
    height: 30px;
    &.collapsed {
      transform: rotate(0deg);
    }
  }
  .sc-lnb-search {
    position: relative;
    padding:0 15px;
    margin-bottom:27px;
    .searchInput {
      border: 1px solid $SC-COLOR-TYPE2-GRAY-40;
      border-radius: 8px;
      background: $SC-COLOR-TYPE2-GRAY-30;
      color: $SC-COLOR-TYPE2-GRAY-90;
      width: 100%;
      height: 32px;
      line-height: 30px;
      font-size: 14px;
      padding:5px 10px;
      &:focus,
      &:hover {
        outline: none;
        border: 1px solid $SC-PRIMARY-COLOR-LIGHT-BLUE;
      }
      // 비활성화
      &:disabled {
        border-color: $SC-COLOR-GRAY-20;
        background-color: $SC-COLOR-GRAY-10;
        color: $SC-COLOR-GRAY-40;
      }
      //read only 일때
      &[readonly] {
        background-color: #fafafa;
        border-color: $SC-COLOR-GRAY-20;
        color: $SC-COLOR-GRAY-80;
        font-weight: 300;
      }
      // placeholder 
      %searchInputStyle {        
        color: $SC-COLOR-TYPE2-GRAY-70;
        font-weight: lighter;
      }
    }
    button.menuSearchClose {
      position: absolute;
      right: 20px;
      top: 5px;
      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
  .sc-lnb-list {
    height: calc(100vh - 218px);
    list-style: none;
    margin: 0;
    padding: 0 15px;
    overflow-y: auto;
    .sc-lnb-tree-item {
      align-items: center;
      border-radius: 8px;
      cursor: pointer;
      display: flex;
      font-size: 16px;
      font-weight: 500;
      color: $SC-COLOR-TYPE2-GRAY-100;
      height: 48px;
      justify-content: space-between;
      padding: 0 16px;
      &:hover {
        color: $SC-PRIMARY-COLOR-TYPE2;
      }
      &:active,
      &.active {
        color: $SC-PRIMARY-COLOR-TYPE2;
        background-color: rgba($SC-SECONDARY-COLOR-TYPE2-60, 0.1);
      }
    }
  }

  .sc-lnb-arrow {
    background-image: url(../../assets/img/ico-chevron-right-14.png);
    background-position: center;
    background-repeat: no-repeat;
    width:14px;
    height:14px;
    &.rotate {
      background-image: url(../../assets/img/ico-chevron-down-14.png);
    }
  }

  .sc-lnb-subtree {
    list-style: none;
    padding: 0;
    margin: 0;
    padding: 10px 16px;
    .sc-lnb-subtree-item {
      align-items: center;
      display: flex;    
      font-size: 14px;
      font-weight: 400;
      color: $SC-COLOR-TYPE2-GRAY-100;
      height: 36px;
      justify-content: space-between;
      padding: 0 11px 0 14px;
      cursor: pointer;
      .sc-lnb-sub-arrow {
        @extend .sc-lnb-arrow;
      }
    }
  }

  .sc-lnb-sub-in-tree {
    background-color: $SC-COLOR-TYPE2-GRAY-10;
    border-radius: 8px;
    list-style: none;
    padding: 0;
    margin: 10px 0 0 0; 
    padding: 11px 24px;
    li {
      color: $SC-COLOR-TYPE2-GRAY-80;
      cursor: pointer;
      font-size: 14px;
      height: 28px;
      display: flex;
      align-items: center;
      padding: 5px 0;
      &:hover {
        text-decoration: underline;
        color:$SC-COLOR-TYPE2-BLACK;
      }
    }
  }
  footer {
    color:$SC-COLOR-TYPE2-GRAY-60;
    font-size:$SC-FONT-SIZE-TYPE2-BODY-1;
    font-weight: $SC-FONT-WEIGHT-TYPE2-BODY-1;
    margin-top:20px;
    text-align: center;
  }
}
</style>
