import scalable from '@assets/bank-icon-scalable.jpeg'
import dkb from '@assets/bank-icon-dkb.png'
import ing from '@assets/bank-icon-ing.png'

export const accountIcons: Record<string, string> = {
  'Scalable Capital': scalable,
  'Deutsche Kredit Bank': dkb,
  'Internationale Nederlanden Groep': ing,
};

export const accountData = {
  currency: 'USD',
  depotsTotal: 3456.78,
  accountsTotal: 8765.43,
  accountBank: ['Deutsche Kredit Bank','Scalable Capital','Internationale Nederlanden Groep'],
  accounts: [
    {
      currency: 'EUR',
      name: 'Scalable Capital Depot',
      bank: 'Scalable Capital',
      balance: 598.73,
      lastUpdate: '16.06.2025',
      graph: 'wip',
    },
    {
      currency: 'USD',
      name: 'ING Depot',
      bank: 'Internationale Nederlanden Groep',
      balance: 7998.73,
      lastUpdate: '12.06.2025',
      graph: 'wip',
    },
    {
      currency: 'USD',
      name: 'DKB Depot',
      bank: 'Deutsche Kredit Bank',
      balance: 7998.73,
      lastUpdate: '12.06.2025',
      graph: 'wip',
    },
    {
      currency: 'USD',
      name: 'ING Depot',
      bank: 'Internationale Nederlanden Groep',
      balance: 7998.73,
      lastUpdate: '12.06.2025',
      graph: 'wip',
    },
  ],
};
