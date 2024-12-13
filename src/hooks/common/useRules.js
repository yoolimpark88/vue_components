import { useI18n } from "vue-i18n";
import { isEmpty, inRange } from "lodash";

export function useRules() {
  // t는 번역된 메세지를 반환하는 함수
  const { t } = useI18n();

  const ruleRequired = (val) => {
    return val === 0 || !val || t("ISPEC_MSG_10101"); //필수값입니다.
  };
  const ruleNotEmpty = (val) => {
    return !isEmpty(val) || t("ISPEC_MSG_10101"); //필수값입니다.
  };
  const ruleEmail = (val) => {
    return (
      !(
        val &&
        !/^[a-za-z]([-_.]?[0-9a-za-z])*@[0-9a-za-z]([-_.]?[0-9a-za-z])*\.[a-za-z]{1,3}$/.test(
          val
        )
      ) || t("ISPEC_MSG_10102") // 올바른 이메일 형식이 아닙니다.
    );
  };

  const ruleNumeric = (val) => {
    return !isNaN(val) || t("ISPEC_MSG_10103"); // 숫자만 가능합니다.
  };

  const ruleBetween = (val, min, max) => {
    return (val) =>
      inRange(val, min, max) ||
      val * 1 === max ||
      t("ISPEC_MSG_10104", [min, max]); // ${min}~${max} 사이값 만 입력 가능합니다.
  };

  const ruleMaxLength = (val, length) => {
    return (val) => val.length <= length || t("ISPEC_MSG_10105", [length]); // 최대 ${length}자 까지 입력 가능합니다.
  };

  const ruleMinLength = (val, length) => {
    return (val) => val.length >= length || t("ISPEC_MSG_10106", [length]); // 최소 ${length}자 이상 입력하세요.
  };

  const ruleMaxByte = (val, length) => {
    return (val) => {
      val = val || "";
      const byteLength = val
        .split("")
        .map((s) => s.charCodeAt(0))
        .reduce((prev, c) => prev + (c === 10 ? 2 : c >> 7 ? 2 : 1), 0);

      return (
        byteLength <= length ||
        t("ISPEC_MSG_10122", [
          length.tostring().replace(/\b(?=(\d{3})+(?!\d))/g, ","),
        ])
      ); // 최대 {0} byte 까지 입력 가능합니다.
    };
  };

  return {
    ruleRequired,
    ruleNotEmpty,
    ruleEmail,
    ruleNumeric,
    ruleBetween,
    ruleMaxLength,
    ruleMinLength,
    ruleMaxByte,
  };
}
