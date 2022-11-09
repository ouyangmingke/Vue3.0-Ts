<!-- 
    const vnode = {
    type: 'div',
    props: {
      id: 'hello'
    },
    children: [
      /* 更多 vnode */
    ]
  } 
-->
<script lang="ts">
import { h } from 'vue'
import Son from '../components/Son.vue'
export default {
    name: 'CreateVnodes',
    data() {
        return {
            msg: 'hello'
        }
    },
    /**
     * 渲染函数
     */
    render() {
        var sonTem = h('div', {
            Slots: {
                default(prop) {
                    return prop;
                },
            }
        });
        var fff = h(sonTem, { style: "" },
            {
                default: () => '修改 sonTem 中的插槽',
            }
        );
        const Component = h(Son, { style: "" },
            {
                default: () => '修改 default slot',
                header: () => h('p', '修改 header 插槽'),
                footer: () => [h('span', 'one'), h('span', 'two')]
            }
        );
        return h(
            'div',
            { id: 'hello', style: "background-color:#d0e4fe;padding:10px;", },
            [
                fff,
                h('li', "A"),
                Component,
                h('p', "使用渲染函数编写页面"),
                h('div', { style: "background-color:#FECAEC;padding:10px;" },
                    [
                        h('li', "B1"),
                        h('div',
                            Array.from({ length: 2 })
                                .map(() => {
                                    return h('p', 'B1')
                                })
                        ),
                    ]
                ),
                h('div', { style: "background-color:#FEEDCA;padding:10px;" },
                    [
                        h('li', "B2"),
                        Array.from({ length: 2 })
                            .map(() => {
                                return h('p', 'B2')
                            })
                    ]
                ),
            ])
    }
}
</script>