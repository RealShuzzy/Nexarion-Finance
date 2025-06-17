import scalable from '@assets/bank-icon-scalable.jpeg'
import dkb from '@assets/bank-icon-dkb.png'
import ing from '@assets/bank-icon-ing.png'

export const icons: Record<string, string> = {
  'Scalable Capital': scalable,
  'Deutsche Kredit Bank': dkb,
  'Internationale Nederlanden Groep': ing,
};

export const data = {
  currency: 'EUR',
  depotsTotal: 3456.78,
  accountsTotal: 8765.43,
  depotBank: ['Deutsche Kredit Bank','Scalable Capital','Internationale Nederlanden Groep'],
  depots: [
    {
      currency: 'EUR',
      name: 'Scalable Capital Depot',
      bank: 'Scalable Capital',
      balance: 6098.73,
      lastUpdate: '16.06.2025',
      graph: 'wip',
      clearingAccount: {
        name: 'Scalable Capital Clearing Account',
        balance: 18.73,
        graph: 'wip',
      },
    },
    {
      currency: 'EUR',
      name: 'ING Depot',
      bank: 'Internationale Nederlanden Groep',
      balance: 578.73,
      lastUpdate: '12.06.2025',
      graph: 'wip',
      clearingAccount: {
        name: 'ING Clearing Account',
        balance: 0.21,
        graph: 'wip',
      },
    },
  ],
};
