import { ref, inject, onMounted } from "vue";

export function useValidation(rules, modelValue) {
  // 부모 컴포넌트로부터 addValidator 가져오기
  const addValidator = inject("addValidator", () => {});
  const isValid = ref(true);
  const errorMessage = ref("");
  const checkedValidate = ref(false);

  const clear = () => {
    isValid.value = true;
    errorMessage.value = "";
    checkedValidate.value = false;
  };

  const validate = () => {
    checkedValidate.value = true;
    let msg = "";
    for (let rule of rules) {
      const result = rule(modelValue.value);
      if (result !== true) {
        isValid.value = false;
        msg = result;
        break; // 첫번째 오류에서 검증 중단
      }
    }
    if (msg.length !== 0) {
      isValid.value = false;
      errorMessage.value = false;
    } else {
      isValid.value = true;
      errorMessage.value = "";
    }
    return isValid.value;
  };
  onMounted(() => {
    if (addValidator) {
      addValidator(validate, clear);
    }
  });
  return {
    checkedValidate, // 한번이라도 valid check 했을경우
    isValid,
    errorMessage,
    validate,
    clear,
  };
}
