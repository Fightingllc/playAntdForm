/**
 * 表单项封装组件
 * - 简单封装antd的Form.Item
 * - 扩展表单中对于当前状态判断，觉得表单项是否显示
 */

//#region 导入
import { cloneElement, FC, isValidElement } from 'react';
// import { useTranslation } from 'react-i18next';
import { Form, FormItemProps } from 'antd';
import { FormItemDisable, useFormCurrStatus } from '../services/formService';
import { ItemStatus, ItemStatusFN } from '../stores/formStore';
//#endregion

/** 组件属性 */
interface Props extends FormItemProps, ItemStatus {
  /**
   * 表单项状态覆盖规则（由下至上覆盖）
   * 1. 全局规则：调用FormItemDisable方法
   * 2. 本表单项规则：实例化时配置属性statusFN
   * 3. 本表单项强制配置：实例化时配置属性disabled, hidden
   * 4. 输入框实例化时自行配置的属性
   */
  statusConfig?: ItemStatusFN;
  /** 占一行 */
  fill?: boolean;
  /** 跨列 */
  crossCol?: number;
}

/**
 *
 * @param props 组件属性
 * @returns 返回本组件
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const FormItem: FC<Props> = ({ statusConfig, fill, crossCol, ...props }) => {
  // 多语言
  //   const { t } = useTranslation();
  // const [FormDisabled, setFormDisabled] = useState<boolean>(true);

  // 通过上下文获取状态
  const currStatus = useFormCurrStatus();
  // 1. 全局规则：调用FormItemDisable方法
  // 2. 本表单项规则：实例化时配置属性statusFN
  const rtn: ItemStatus = FormItemDisable(currStatus, statusConfig);
  // 3. 本表单项强制配置：实例化时配置属性disabled, hidden

  rtn.disabled = props.disabled;
  rtn.hidden = props.hidden;

  // 4. 输入框实例化时自行配置的属性
  let children = props.children;
  if (isValidElement(props.children)) {
    if (props.children.props.disabled === true) {
      rtn.disabled = true;
    }
    if (props.children.props.hidden === true) {
      rtn.hidden = true;
    }
    children = cloneElement(props.children, { ...rtn });
  }

  return (
    // antd中Form.Item里面只能由一个子项
    // {...props}用法很危险。需要提前解构掉不属于Form.Item的属性。
    <Form.Item {...props} className={`form-item ${props.className ?? ''}`}>
      {children}
    </Form.Item>
  );
};
export default FormItem;
