export default {
  functional: true,
  props: {
    level: {
      type: String,
      required: true,
    },
  },
  render(createElement, { props, data, children }) {
    return createElement(
      'h' + props.level,
      {
        class: {
          ...(data.staticClass && {
            [data.staticClass]: true,
          }),
        },
        attrs: {
          ...data.attrs,
        },
      },
      children
    )
  },
}
