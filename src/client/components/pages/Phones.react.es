'use strict';

import React from 'react';
import AddPhoneModal from 'components/modals/AddPhoneModal.react';
import PhonesTable from 'components/phones/PhonesTable.react';

export default class NotesPage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <PhonesTable />
                <hr/>
                <AddPhoneModal />
            </div>
        );
    }
}
