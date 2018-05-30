export const navItems = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer'
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
    url: '/employee',
    icon: 'cui-people',
    children : [
      {
        name: 'New Hire',
        url: '/employee/newhire',
        icon: 'fa fa-address-card-o'
    },
    {
      name: 'Scheduler',
      url: '/employee/Scheduler',
      icon: 'fa fa-calendar-times-o'
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
