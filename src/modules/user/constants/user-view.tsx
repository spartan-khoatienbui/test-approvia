import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { IUser } from '~configs';
import UserActionButton from '~modules/user/components/molecules/UserActionButton.tsx';
import { Label } from '~shared';
import { TableColumn } from '~shared/types/table.ts';

export const USER_VIEW_TABLE_COLUMNS: TableColumn<IUser>[] = [
  {
    key: 'name',
    label: 'Name',
    itemShouldRender: (item: IUser) => (
      <Stack direction="row" alignItems="center" spacing={2}>
        <Avatar alt={item.name} src={item.avatarUrl} />
        <Typography variant="subtitle2" noWrap>
          {item.name}
        </Typography>
      </Stack>
    ),
  },
  { key: 'company', label: 'Company' },
  {
    key: 'role',
    label: 'Role',
    props: { align: 'center' },
    itemShouldRender: (item: IUser) => (item.isVerified ? 'Yes' : 'No'),
  },
  {
    key: 'status',
    label: 'Status',
    props: { align: 'center' },
    itemShouldRender: (item: IUser) => (
      <Label color={(item.status === 'banned' && 'error') || 'success'}>{item.status}</Label>
    ),
  },
  {
    key: 'action',
    label: 'Action',
    props: { align: 'right' },
    itemShouldRender: () => <UserActionButton />,
  },
];
