import Client from '../../presentation/pages/Client/Client.vue'
import ClientList from '../../presentation/pages/Client/ClientList.vue'

export const ClientConfig = {
  name: 'client',
  path: 'client',
  component: Client,
  redirect: '/client/list',
  children: [
    {
      path: 'list',
      name: 'client-list',
      component: ClientList,
    },
  ],
}
