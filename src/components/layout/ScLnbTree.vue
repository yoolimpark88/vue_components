<template>
	<div :class="['sc-lnb-Tree', { 'collapsed': isCollapsed }]">
    <button v-if="showLnbToggleBtn" :class="['sc-lnb-toggle-btn', { 'collapsed': isCollapsed }]" @click="toggleMenu"></button>
    <h1 class="sc-lnb-logo">UI Docs.</h1>
    <ul class="sc-lnb-list">
      <li v-for="(menu, index) in menus" :key="index">
        <div :class="['sc-lnb-tree-item', { 'active': menu.isOpen }]" @click="toggleSubmenu(index)">
          {{ menu.name }}
          <span v-if="menu.submenus && menu.submenus.length" :class="['sc-lnb-arrow', { 'rotate': menu.isOpen }]"></span>
        </div>
        <ul v-if="menu.isOpen" class="sc-lnb-subtree">
          <li v-for="(submenu, subIndex) in menu.submenus" :key="subIndex">
            <div class="sc-lnb-subtree-item" @click="submenu.routerUrl ? navigateToRoute(submenu.routerUrl) : toggleSubSubmenu(index, subIndex)">
              {{ submenu.name }}
              <span v-if="submenu.subsubmenus && submenu.subsubmenus.length" :class="['sc-lnb-sub-arrow', { 'rotate': submenu.isOpen }]"></span>
            </div>
            <ul v-if="submenu.isOpen" class="sc-lnb-sub-in-tree">
              <li v-for="(subsubmenu, subSubIndex) in submenu.subsubmenus" :key="subSubIndex" @click="subsubmenu.routerUrl && navigateToRoute(subsubmenu.routerUrl)">
                {{ subsubmenu.name }}
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    showLnbToggleBtn: {
      type: Boolean,
      default: true, // 기본값을 설정
    },
  },
  data() {
    return {
      isCollapsed: false,
      menus: [
        {
          name: 'Components',
          isOpen: false,
          submenus: [
            {
              name: 'Button',
              isOpen: false,
              subsubmenus: [
                { name: 'Basic Button', routerUrl:'sampleButton' },
              ],
            },
            {
              name: 'QueryInfo',
              isOpen: false,
              subsubmenus: [
                { name: 'SampleQueryInfo', routerUrl:'sampleQueryInfo' },
              ],
            },
            {
              name: 'Modal',
              isOpen: false,
              subsubmenus: [
                { name: 'SampleModal', routerUrl:'sampleModal' },
              ],
            },
            {
              name: 'Checkbox',
              isOpen: false,
              subsubmenus: [
                { name: 'SampleCheckbox', routerUrl:'sampleCheckbox' },
              ],
            },
            {
              name: 'CheckboxWrapper',
              isOpen: false,
              subsubmenus: [
                { name: 'SampleCheckboxWrapper', routerUrl:'sampleCheckboxWrapper' },
              ],
            },
            {
              name: 'FormBox',
              isOpen: false,
              subsubmenus: [
                { name: 'SampleFormBox', routerUrl:'sampleFormBox' },
              ],
            },
            {
              name: 'FormItem',
              isOpen: false,
              subsubmenus: [
                { name: 'SampleFormItem', routerUrl:'sampleFormItem' },
              ],
            },
            {
              name: 'TextField',
              isOpen: false,
              subsubmenus: [
                { name: 'SampleTextField', routerUrl:'sampleTextField' },
              ],
            },
            {
              name: 'TextArea',
              isOpen: false,
              subsubmenus: [
                { name: 'SampleTextArea', routerUrl:'sampleTextArea' },
              ],
            },
            {
              name: 'Icon',
              isOpen: false,
              subsubmenus: [
                { name: 'SampleIcon', routerUrl:'sampleIcon' },
              ],
            },
            {
              name: 'SearchBox',
              isOpen: false,
              subsubmenus: [
                { name: 'SampleSearchBox', routerUrl:'sampleSearchBox' },
              ],
            },
            {
              name: 'Dropdown',
              isOpen: false,
              subsubmenus: [
                { name: 'SampleDropdown', routerUrl:'sampleDropdown' },
              ],
            },
            {
              name: 'MultiDropdown',
              isOpen: false,
              subsubmenus: [
                { name: 'SampleMultiDropdown', routerUrl:'sampleMultiDropdown' },
              ],
            },
            {
              name: 'Radio',
              isOpen: false,
              subsubmenus: [
                { name: 'SampleRadio', routerUrl:'sampleRadio' },
              ],
            },
            {
              name: 'ToggleButton',
              isOpen: false,
              subsubmenus: [
                { name: 'SampleToggleButton', routerUrl:'sampleToggleButton' },
              ],
            },
            {
              name: 'Tab',
              isOpen: false,
              subsubmenus: [
                { name: 'SampleTab', routerUrl:'sampleTab' },
              ],
            },
            {
              name: 'Tag',
              isOpen: false,
              subsubmenus: [
                { name: 'SampleTag', routerUrl:'sampleTag' },
              ],
            },
            {
              name: 'Badge',
              isOpen: false,
              subsubmenus: [
                { name: 'SampleBadge', routerUrl:'sampleBadge' },
              ],
            },
            {
              name: 'InputChip',
              isOpen: false,
              subsubmenus: [
                { name: 'SampleInputChip', routerUrl:'sampleInputChip' },
              ],
            },
            {
              name: 'Table',
              isOpen: false,
              subsubmenus: [
                { name: 'SampleTable', routerUrl:'sampleTable' },
              ],
            },
            {
              name: 'Accordion',
              isOpen: false,
              subsubmenus: [
                { name: 'SampleAccordion', routerUrl:'sampleAccordion' },
              ],
            },
            {
              name: 'FileForm',
              isOpen: false,
              subsubmenus: [
                { name: 'SampleFileForm', routerUrl:'sampleFileForm' },
              ],
            },
            {
              name: 'Tooltip',
              isOpen: false,
              subsubmenus: [
                { name: 'SampleTooltip', routerUrl:'sampleTooltip' },
              ],
            },
            {
              name: 'Alert',
              isOpen: false,
              subsubmenus: [
                { name: 'SampleAlert', routerUrl:'sampleAlert' },
              ],
            },
            {
              name: 'Confirm',
              isOpen: false,
              subsubmenus: [
                { name: 'SampleConfirm', routerUrl:'sampleConfirm' },
              ],
            },
            {
              name: 'ColorPicker',
              isOpen: false,
              subsubmenus: [
                { name: 'SampleColorPicker', routerUrl:'sampleColorPicker' },
              ],
            },
            {
              name: 'Datepicker',
              isOpen: false,
              subsubmenus: [
                { name: 'SampleDatepicker', routerUrl:'sampleDatepicker' },
              ],
            },
            {
              name: 'DateRangePicker',
              isOpen: false,
              subsubmenus: [
                { name: 'SampleDateRangePicker', routerUrl:'sampleDateRangePicker' },
              ],
            },
            {
              name: 'Clipboard',
              isOpen: false,
              subsubmenus: [
                { name: 'SampleClipboard', routerUrl:'sampleClipboard' },
              ],
            },
            {
              name: 'Number',
              isOpen: false,
              subsubmenus: [
                { name: 'SampleNumber', routerUrl:'sampleNumber' },
              ],
            },
            {
              name: 'Locale',
              isOpen: false,
              subsubmenus: [
                { name: 'SampleLocale', routerUrl:'sampleLocale' },
              ],
            },
            {
              name: 'I18n',
              isOpen: false,
              subsubmenus: [
                { name: 'SampleI18n', routerUrl:'sampleI18n' },
              ],
            },
            {
              name: 'Color',
              isOpen: false,
              subsubmenus: [
                { name: 'SampleColor', routerUrl:'sampleColor' },
              ],
            },
            {
              name: 'Pagination',
              isOpen: false,
              subsubmenus: [
                { name: 'SamplePagination', routerUrl:'samplePagination' },
              ],
            },
            {
              name: 'ScrollSpy',
              isOpen: false,
              subsubmenus: [
                { name: 'SampleScrollSpy', routerUrl:'sampleScrollSpy' },
              ],
            },
          ],
        },
      ],
    };
  },
  methods: {
    toggleMenu() {
      this.isCollapsed = !this.isCollapsed;
    },
    toggleSubmenu(index) {
      // Reset all submenus and subsubmenus
      this.menus.forEach((menu, i) => {
        if (i !== index) {
          menu.isOpen = false;
          menu.submenus.forEach((submenu) => {
            submenu.isOpen = false;
            if (submenu.subsubmenus) {
              submenu.subsubmenus.forEach((subsubmenu) => {
                subsubmenu.isOpen = false;
              });
            }
          });
        }
      });
      this.menus[index].isOpen = !this.menus[index].isOpen;
    },
    toggleSubSubmenu(menuIndex, submenuIndex) {
      // Reset all subsubmenus within the same menu
      this.menus[menuIndex].submenus.forEach((submenu, i) => {
        if (i !== submenuIndex) {
          submenu.isOpen = false;
          if (submenu.subsubmenus) {
            submenu.subsubmenus.forEach((subsubmenu) => {
              subsubmenu.isOpen = false;
            });
          }
        }
      });
      this.menus[menuIndex].submenus[submenuIndex].isOpen = !this.menus[menuIndex].submenus[submenuIndex].isOpen;
    },
    navigateToRoute(routerUrl) {
      console.log(`Navigating to: ${routerUrl}`);
      // routerUrl 이벤트를 부모로 emit
      this.$emit('navigate', routerUrl);
    },
  },
};
</script>

<style>
</style>
