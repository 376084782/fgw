import Vue from 'vue'

import {
    Menu,
    Submenu,
    MenuItem,
    MenuItemGroup,
    Input,
    InputNumber,
    Select,
    Option,
    Button,
    Table,
    TableColumn,
    DatePicker,
    TimeSelect,
    TimePicker,
    Tooltip,
    Form,
    FormItem,
    Alert,
    Icon,
    Row,
    Col,
    Cascader,
    Container,
    Header,
    Aside,
    Main,
    Footer,
    Loading,
    MessageBox,
    Message,
    Notification,
    Scrollbar,
    Tag,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Badge,
    Popover,
    TabPane,
    Tabs,
    Breadcrumb,
    BreadcrumbItem,
    Card,
    Pagination,
    Collapse,
    CollapseItem,
    Dialog,
    Radio,
    Checkbox
} from 'element-ui';

Vue.use(Checkbox)
Vue.use(Radio)
Vue.use(Dialog)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(Pagination)
Vue.use(Card)
Vue.use(BreadcrumbItem)
Vue.use(Breadcrumb)
Vue.use(TabPane)
Vue.use(Tabs)
Vue.use(Popover)
Vue.use(Badge)
Vue.use(Button)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Tag)
Vue.use(Scrollbar)
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Input);
Vue.use(InputNumber);
Vue.use(Select);
Vue.use(Option);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(DatePicker);
Vue.use(TimeSelect);
Vue.use(TimePicker);
Vue.use(Tooltip);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Alert);
Vue.use(Icon);
Vue.use(Row);
Vue.use(Col);
Vue.use(Cascader);
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Footer);

Vue.use(Loading.directive);

Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;