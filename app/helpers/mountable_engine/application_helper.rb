module MountableEngine
  module ApplicationHelper
    def react_component(name, props = {}, className = '')
      content_tag(
        :div,
        '',
        data: {
          react_component: { name: name, props: props }
        },
        class: className
      )
    end
  end
end
