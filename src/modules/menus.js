const mainMenu = [
    { to: '/', text: 'Companies', props: { onlyActiveOnIndex: true } },
    { to: '/add_company', text: 'Add company', props: {} },
    { to: '/add_testimonials', text: 'Add testimonials', props: {} },
]

const getMenuForCompany = name => [
    { to: `/company/${name}`, text: 'Testimonials', props: { onlyActiveOnIndex: true } },
    { to: `/company/${name}/get_slider`, text: 'Get slider', props: {} },
]

export {
    mainMenu,
    getMenuForCompany,
}
