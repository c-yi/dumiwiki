import React from "react";

export declare type SizeType = 'small' | 'middle' | 'large' | undefined;
declare const ButtonTypes: ["default", "primary", "ghost", "dashed", "link", "text"];
export declare type ButtonType = typeof ButtonTypes[number];
declare const ButtonShapes: ["default", "circle", "round"];
export declare type ButtonShape = typeof ButtonShapes[number];
declare const ButtonHTMLTypes: ["submit", "button", "reset"];
export declare type ButtonHTMLType = typeof ButtonHTMLTypes[number];
export declare type LegacyButtonType = ButtonType | 'danger';

export interface BaseButtonProps {
  /**
   * 按钮类型
   * @default default
   */
  type?: ButtonType;
  icon?: React.ReactNode;
  /**
   * 设置按钮形状
   * @default default
   * */
  shape?: ButtonShape;
  /**
   * 设置按钮大小
   * @default default
   */
  size?: SizeType;
  /**
   * 设置按钮载入状态
   */
  loading?: boolean | {
    delay?: number;
  };
  prefixCls?: string;
  /**
   * 类名
   */
  className?: string;
  /**
   * 	幽灵属性，使按钮背景透明
   */
  ghost?: boolean;
  /**
   * 设置危险按钮
   */
  danger?: boolean;
  /**
   * 将按钮宽度调整为其父宽度的选项
   */
  block?: boolean;
  /**
   * 按钮失效状态
   * @default false
   */
  disabled?:boolean;
  children?: React.ReactNode;
}
