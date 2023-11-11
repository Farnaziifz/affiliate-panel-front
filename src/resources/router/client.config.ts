import Client from '../../presentation/pages/Client/Client.vue'
import ClientList from '../../presentation/pages/Client/ClientList.vue'
import ClientDetails from '../../presentation/pages/Client/ClientDetails.vue'
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
    {
      path: 'details/:id',
      name: 'client-detail',
      component: ClientDetails
    }
  ],
}
