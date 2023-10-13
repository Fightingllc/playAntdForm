import { Col, Divider, Row } from "antd";
import { Children, FC, PropsWithChildren, ReactNode, isValidElement } from "react";
import './index.less';

/** 组件属性 */
interface Props {
    /** 板块标题 */
    title?: string;
    /** 字段列列数，自动覆盖span.colSpan设置 */
    cols?: number;
    /** 插槽 */
    // children?: ReactNode;
    /** 样式名 */
    className?: string;
    /** 占一行 */
    fill?: boolean;
    /** 跨列 */
    crossCol?: number;
  }

  /**
   * 表单字段集，默认两列等分布局
   * 一般用于对表单板块中字段分组显示。
   * @param param0  组件属性
   * @returns 返回字段集
   */
const FormFiledSet: FC<PropsWithChildren<Props>> = ({
  title,
  cols:propsCols,
  children,
  className,
}) => {
  // 默认一行两列
  const cols = propsCols ?? 2;
  const colLayout = {
    span: 24 / cols,
  };

  return (
    <div className={`form-field-set ${className ?? ''}`}>
      {title && title.length > 0 && (
        <Divider orientation="left" orientationMargin="0">
          {title}
        </Divider>
      )}
      <Row gutter={24}>
        {Children.map(children, (child: ReactNode) => {
          if (!child) {
            return null;
          }

          // FormItem强制定义了跨列，则按FormItem为准
          let span = colLayout.span;

          // 因子组件类型不可预知。如报错，则放弃跨列。
          if (isValidElement(child) && child.props) { // 使用条件语句来检查属性是否存在
            if (child.props.fill) {
              span = 24;
            } else if (child.props.crossCol !== undefined) {
              span = span * child.props.crossCol;
            }
          } else {
            console.log('此组件不适用跨列');
            // 可以考虑添加错误处理反馈，比如使用 Ant Design 的 message 组件来显示错误信息
          }
          return <Col span={span}>{child}</Col>;
        })}
      </Row>
    </div>
  );
};


export default FormFiledSet