module.exports = {
    title: 'PCA One',
    description: 'Padaroms Computer Architecture - Version One',
    themeConfig: {
        repo: 'padarom/pca-one',
        nav: [],
        sidebarDepth: 0,
        sidebar: [
            ['/', 'Home'],
            {
                title: 'Design',
                collapsable: false,
                children: [
                    '/instruction_set',
                    '/microcode',
                    '/alu_design',
                    '/processor_flags',
                    '/control_signals'
                ]
            },
            {
                title: 'Programming',
                collapsable: false,
                children: [
                    '/assembler'
                ]
            },
            {
                title: 'Implementation Details',
                collapsable: false,
                children: [
                    '/build_process',
                    '/schematics/clock',
                    '/schematics/register'
                ]
            }
        ]
    }
};
