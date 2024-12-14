import { defineStore } from "pinia";
import { ref } from "vue"; // ref import 추가
import { useCommonStore } from "@/store/commonStore";

export const useRoleStore = defineStore("role", {
  state: () => ({
    roles: ref({}), // ref로 감싸서 정의
    roleIds: ref({}), // ref로 감싸서 정의
  }),
  getters: {
    getCurrentRoles: (state) => {
      const commonStore = useCommonStore();
      const { selectedMenuId } = commonStore;
      if (selectedMenuId) {
        return state.roles[selectedMenuId] ?? [];
      }
      return [];
    },
    getCurrentRoleIds: (state) => {
      const commonStore = useCommonStore();
      const { selectedMenuId } = commonStore;
      if (selectedMenuId) {
        return state.roleIds[selectedMenuId] ?? [];
      }
      return [];
    },
  },
  actions: {
    existRole(menuId) {
      return !!this.roles[menuId]; // this.roles로 수정
    },
    addRole(menuId, roles) {
      const roleList = roles.map((role) => {
        return role["BUTTON_COMP_ID"];
      });
      const roleIdList = roles.map((role) => {
        return role["ROLE_ID"];
      });
      this.roles.value = {
        ...this.roles.value,
        [menuId]: roleList,
      };
      this.roleIds.value = {
        ...this.roleIds.value,
        [menuId]: roleIdList,
      };
    },
  },
});
