import React, { Component } from "react";

interface Props {
  children: JSX.Element[];
}
interface IProps extends Props {
  condition: boolean[] | boolean;
}

export default class Drawer extends Component<IProps, {}> {
  static Box: (props: Props) => JSX.Element;
  render() {
    return (
      <>
        {Array.isArray(this.props.condition) &&
          this.props.condition
            .map((item, index: number) => {
              return item && this.props.children[index];
            })
            .filter((item) => !!item)}

        {!Array.isArray(this.props.condition) &&
          this.props.condition &&
          this.props.children}
      </>
    );
  }

//   static Box(props: Props) {
//     return <>{props.children}</>;
//   }
}

Drawer.Box = (props: Props) => {
    return (<>{props.children}</>)
}

