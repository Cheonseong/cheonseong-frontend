import React, { useState } from 'react';
import AccountTableHeader from './AccountTableHeader';
import AccountTableBody from './AccountTableBody';
import AccountTableFooter from './AccountTableFooter';
import { AccountRecord, initialAccountSampleData } from './AccountData';

const AccountTable: React.FC = () => {
  const [accountData, setAccountData] = useState<AccountRecord[]>(initialAccountSampleData);
  const [editModeIndex, setEditModeIndex] = useState<number | null>(null);

  return (
    <div className="container mx-auto mt-8 px-10">
      <AccountTableHeader accountData={accountData} />;
      <AccountTableBody
        accountData={accountData}
        setAccountData={setAccountData}
        editModeIndex={editModeIndex}
        setEditModeIndex={setEditModeIndex}
      />
      <AccountTableFooter
        accountData={accountData}
        setAccountData={setAccountData}
        setEditModeIndex={setEditModeIndex}
      />
    </div>
  );
};

export default AccountTable;
