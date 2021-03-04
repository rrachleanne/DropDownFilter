import React from "react";
import DefaultLayout from "../../shared/ui/layouts/default-layout";
// import PersonList from '../../components/PersonList'
// import ApiList from '../../components/ApiList'
// import PersonList from '../../components/PersonList'
// // import Table from '../../components/Table'
// import FirmList from '../../components/Firms/FirmList'
//  import Grid from '../../components/AG-Grid/AgGrid'
// import Grid from "../../components/AG-Grid-state/AgGrid";
// import {Search} from '../../components/AG-Grid-state/Search'
// import {Filter} from "../../components/AG-Grid-state/Filter"
import Dropdown from "../../components/Filters/DropdownFilter"
// import RadioFilter from "../../components/Filters/RadioFilter"

export default function ViewFirms() {
  return (
    <DefaultLayout>
      <Dropdown />
    </DefaultLayout>
  );
}
