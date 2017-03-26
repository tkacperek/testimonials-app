const mainMenu = [
    { to: '/', text: 'Companies', props: { onlyActiveOnIndex: true } },
    { to: '/add_company', text: 'Add company', props: {} },
]

const getMenuForCompany = name => [
    { to: `/company/${name}`, text: 'Testimonials', props: { onlyActiveOnIndex: true } },
    { to: `/company/${name}/add_testimonial`, text: 'Add testimonials', props: {} },
    { to: `/company/${name}/get_slider`, text: 'Get slider', props: {} },
]

export {
    mainMenu,
    getMenuForCompany,
}
