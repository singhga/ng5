export const navItems = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    //badge: {
      //variant: 'info',
      //text: 'NEW'
    //}
  },
  {
    title: true,
    name: 'Reports',
  },
  {
    name: 'Sales',
    url: '/sales',
    icon: 'fa fa-line-chart',
    children : [
      {
        name: 'Transactions',
        url: '/sales/transactions',
        icon: 'fa fa-credit-card-alt'
    },
    {
      name: 'Items',
      url: '/sales/items',
      icon: 'fa fa-cubes'
  },
  {
    name: 'Locations',
    url: '/sales/locations',
    icon: 'fa fa-compass'
}
    ]
  },
  {
    name: 'Employee',
    url: '/Employee1',
    icon: 'cui-people',
    children : [
      {
        name: 'Transactions',
        url: '//transactions1',
        icon: 'fa fa-credit-card-alt'
    },
    {
      name: 'Items',
      url: '//items1',
      icon: 'fa fa-cubes'
  },
  {
    name: 'Locations',
    url: '//locations1',
    icon: 'fa fa-compass'
}
    ]
  },
  {
    title: true,
    name: 'Notifications',
  },
  {
    name: 'Survey',
    url: '/surve',
    icon: 'fa fa-bullhorn',
    children : [
      {
        name: 'Transactions',
        url: '/survey',
        icon: 'fa fa-credit-card-alt'
    },
    {
      name: 'Items',
      url: '/survey',
      icon: 'fa fa-cubes'
  },
  {
    name: 'Locations',
    url: '/survey',
    icon: 'fa fa-compass'
}
    ]
  }
];
