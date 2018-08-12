<template>
                <treeselect
            :options="classes"
            :disable-branch-nodes="true"
            placeholder="Select a group..."
        />

</template>

<script>

import Treeselect from '@riophae/vue-treeselect';
import '@riophae/vue-treeselect/dist/vue-treeselect.css';

export default {
    components: {
        Treeselect
    },
    data () {
            return {
                current: "",
                classes: [
                    {
                        id: 'year8',
                        label: 'Year 8',
                        children: [
                            {
                                id: 'year8.1',
                                label: '08l/MaD'
                            },
                            {
                                id: 'year8.2',
                                label: '08l/MaR'
                            },
                            {
                                id: 'year8.3',
                                label: '08l/MaW'
                            },
                            {
                                id: 'year8.4',
                                label: '08l/MaC'
                            },
                            {
                                id: 'year8.5',
                                label: '08l/MaH'
                            },
                            {
                                id: 'year8.6',
                                label: '08l/MaA'
                            },
                            {
                                id: 'year8.r1',
                                label: '08r/MaD'
                            },
                            {
                                id: 'year8.r2',
                                label: '08r/MaR'
                            },
                            {
                                id: 'year8.r3',
                                label: '08r/MaW'
                            },
                            {
                                id: 'year8.r4',
                                label: '08r/MaC'
                            },
                            {
                                id: 'year8.r5',
                                label: '08r/MaH'
                            }
                        ]
                    },
                    {
                        id: 'year9',
                        label: 'Year 9',
                        children: [
                            {
                                id: 'year9.1',
                                label: 'Year 9 PPE'
                            },
                            {
                                id: 'year9.2',
                                label: 'Year 9 Easter Assessment'
                            }
                        ]
                    },
                    {
                        id: 'year10',
                        label: 'Year 10',
                        children: [
                            {
                                id: 'year10.1',
                                label: 'Year 10 PPE'
                            },
                            {
                                id: 'year10.2',
                                label: 'Year 10 Easter Assessment'
                            },
                            {
                                id: 'year10.3',
                                label: 'Year 10 PPE'
                            },
                            {
                                id: 'year10.4',
                                label: 'Year 10 Easter Assessment'
                            },
                            {
                                id: 'year10.5',
                                label: 'Year 10 PPE'
                            },
                            {
                                id: 'year10.6',
                                label: 'Year 10 Easter Assessment'
                            },
                            {
                                id: 'year10.7',
                                label: 'Year 10 PPE'
                            },
                            {
                                id: 'year10.8',
                                label: 'Year 10 Easter Assessment'
                            },
                            {
                                id: 'year10.9',
                                label: 'Year 10 PPE'
                            },
                            {
                                id: 'year10.10',
                                label: 'Year 10 Easter Assessment'
                            }
                        ]
                    }
                ]
            }
        }
}
</script>
