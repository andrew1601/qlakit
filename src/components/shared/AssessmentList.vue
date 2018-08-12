<template>
                <treeselect
            :options="assessments"
            :disable-branch-nodes="true"
            placeholder="Select an assessment..."
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
                assessments: [
                    {
                        id: 'year8',
                        label: 'Year 8',
                        children: [
                            {
                                id: 'year8.1',
                                label: 'Year 8 PPE'
                            },
                            {
                                id: 'year8.2',
                                label: 'Year 8 Easter Assessment'
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
