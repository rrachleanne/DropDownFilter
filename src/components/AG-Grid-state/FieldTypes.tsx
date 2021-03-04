// import "./style.css";
export type MyProps = {
  headerName?: string;
  field?: any;
  firmId?: number;
  firmName?: string;
  phone?: number;
  fax?: number;
  email?: string;
  isTestFirm?: boolean;
  status?: number;
  statusDescription?: string;
  deleteCode?: number;
  levelUnitShop?: number;
  streetNumber?: number;
  streetName?: string;
  streetType?:string;
  postcode?: number;
  state?: string;
  suburb?: string;
  numberOfUsers?: number;
  lastConversionImportDate?: number;
  search?: any

};
export type MyState = {
  rowData: any;
  columnDefs: any;
};
