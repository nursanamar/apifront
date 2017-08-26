const Logo = (props) => {
  return <a href="index2.html" className="logo">
    {/* <!-- mini logo for sidebar mini 50x50 pixels --> */}
    <span className="logo-mini"><b>Api</b>Bud</span>
    {/* <!-- logo for regular state and mobile devices --> */}
    <span className="logo-lg"><b>Api</b>Builder</span>
  </a>
}
const Message = (props) => {
  return <li>
    <a href="#">
      <div className="pull-left">
        <img src={props.image} className="img-circle" alt="User Image" />
      </div>
      <h4>
        {props.name}
        <small><i className="fa fa-clock-o"></i> 5 mins</small>
      </h4>
      <p>{props.text}</p>
    </a>
  </li>
}
const Messages = (props) => {
  var message = [];
  var count = null;
  if (props.message !== null) {
    props.message.forEach((data) => {
      message.push(<Message key={data.key} name={data.name} image={data.image} text={data.text} />);
      count++;
    });
  }else {
    message = <h4>No Message</h4>;
  }
  return (
  <li className="dropdown messages-menu">
    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
      <i className="fa fa-envelope-o"></i>
      <span className="label label-success">{count}</span>
    </a>
    <ul className="dropdown-menu">
      <li className="header">You have {count} messages</li>
      <li>
        <ul className="menu">
          {message}
        </ul>
      </li>
      <li className="footer"><a href="#">See All Messages</a></li>
    </ul>
  </li>
  )
}
 const Notification = (props) => {
   return (
    <li>
     <a href="#">
       <i className="fa fa-users text-aqua"></i>{props.text}
     </a>
    </li>
  )
 }
const Notifications = (props) => {
  <li className="dropdown notifications-menu">
    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
      <i className="fa fa-bell-o"></i>
      <span className="label label-warning">10</span>
    </a>
    <ul className="dropdown-menu">
      <li className="header">You have 10 notifications</li>
      <li>
        {/* <!-- inner menu: contains the actual data --> */}
        <ul className="menu">

        </ul>
      </li>
      <li className="footer"><a href="#">View all</a></li>
    </ul>
  </li>
}
const Task = (props) => {
  return (
    <li>
      <a href="#">
        <h3>
          {props.text}
          <small className="pull-right">{props.progress}</small>
        </h3>
        <div className="progress xs">
          <div className="progress-bar progress-bar-aqua" style="width: 20%" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
            <span className="sr-only">{props.progress}</span>
          </div>
        </div>
      </a>
    </li>
  )
}
const Tasks = (props) => {
  return (
    <li className="dropdown tasks-menu">
      <a href="#" className="dropdown-toggle" data-toggle="dropdown">
        <i className="fa fa-flag-o"></i>
        <span className="label label-danger">9</span>
      </a>
      <ul className="dropdown-menu">
        <li className="header">You have 9 tasks</li>
        <li>
          {/* <!-- inner menu: contains the actual data --> */}
          <ul className="menu">

          </ul>
        </li>
        <li className="footer">
          <a href="#">View all tasks</a>
        </li>
      </ul>
    </li>
  )
}
const User = (props) => {
  return (
    <li className="dropdown user user-menu">
      <a href="#" className="dropdown-toggle" data-toggle="dropdown">
        <img src={props.image} className="user-image" alt="User Image" />
        <span className="hidden-xs">{props.name}</span>
      </a>
      <ul className="dropdown-menu">
        <li className="user-header">
          <img src={props.image} className="img-circle" alt="User Image" />
          <p>
            {props.name}
            <small>{props.desc}</small>
          </p>
        </li>
        {/* <!-- Menu Body --> */}
        <li className="user-body">
          <div className="row">
            <div className="col-xs-4 text-center">
              <a href="#">Followers</a>
            </div>
            <div className="col-xs-4 text-center">
              <a href="#">Sales</a>
            </div>
            <div className="col-xs-4 text-center">
              <a href="#">Friends</a>
            </div>
          </div>
          {/* <!-- /.row --> */}
        </li>
        {/* <!-- Menu Footer--> */}
        <li className="user-footer">
          <div className="pull-left">
            <a href="#" className="btn btn-default btn-flat">Profile</a>
          </div>
          <div className="pull-right">
            <a href="#" className="btn btn-default btn-flat" onClick={() => {
              localStorage.removeItem('token');
              localStorage.removeItem('id');
              localStorage.removeItem('name');
              window.location.assign("login.html");
            }}>Sign out</a>
          </div>
        </li>
      </ul>
    </li>
  )
}
const CustomNav = (props) => {
    return <div className="navbar-custom-menu">
    <ul className="nav navbar-nav">
      {props.children}
      <li>
        <a href="#" data-toggle="control-sidebar"><i className="fa fa-gears"></i></a>
      </li>
    </ul>
  </div>
}
const NavLte = (props) => {
  return <nav className="navbar navbar-static-top">
    {/* <!-- Sidebar toggle button--> */}
    <a href="#" className="sidebar-toggle" data-toggle="offcanvas" role="button">
      <span className="sr-only">Toggle navigation</span>
    </a>
    {props.children}
  </nav>
}
const HeaderLte = (props) => {
  return (
    <header className="main-header">
      {props.children}
    </header>
  )
}

const userPanel = (props) => {
  return (
    <div className="user-panel">
      <div className="pull-left image">
        <img src={props.image} className="img-circle" alt="User Image" />
      </div>
      <div className="pull-left info">
        <p>{props.name}</p>
        {/* <!-- Status --> */}
        <a href="#"><i className="fa fa-circle text-success"></i>{props.desc}</a>
      </div>
    </div>
  )
}

const sidebarForm = (props) => {
  return (
    <form action="#" method="get" className="sidebar-form">
      <div className="input-group">
        <input type="text" name="q" className="form-control" placeholder="Search..." />
            <span className="input-group-btn">
              <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search"></i>
              </button>
            </span>
      </div>
    </form>
  )
}

const Treeview = (props) => {
  return (
    <li className="treeview">
      <a href="#"><i className="fa fa-link"></i> <span>{props.name}</span>
        <span className="pull-right-container">
          <i className="fa fa-angle-left pull-right"></i>
        </span>
      </a>
      <ul className="treeview-menu">
        {props.children}
      </ul>
    </li>
  )
}

const SidebarList = (props) => {
  return (
    <li><a href={props.href}><i className="fa fa-link"></i> <span>{props.text}</span></a></li>
  )
}

const SidebarMenu = (props) => {
  return (
    <ul className="sidebar-menu">
      <li className="header">{props.header}</li>
      {/* <!-- Optionally, you can add icons to the links --> */}
      {props.children}

    </ul>
  )
}

const SidebarLte = (props) => {
  return (
    <aside className="main-sidebar">

      {/* <!-- sidebar: style can be found in sidebar.less --> */}
      <section className="sidebar">
        {props.children}
      </section>
    </aside>
  )
}

const PageLte = (props) => {
  return (
    <div className="content-wrapper">
      {/* <!-- Content Header (Page header) --> */}
      <section className="content-header">
        <h1>
          {props.header}
          <small>{props.desc}</small>
        </h1>
        {/* <ol className="breadcrumb">
          <li><a href="#"><i className="fa fa-dashboard"></i> Level</a></li>
          <li className="active">Here</li>
        </ol> */}
      </section>

      {/* <!-- Main content --> */}
      <section className="content">
        {props.children}
        {/* <!-- Your Page Content Here --> */}

      </section>
      {/* <!-- /.content --> */}
    </div>
  )
}

const FooterLte = (props) => {
  return (
    <footer className="main-footer">
      {/* <!-- To the right --> */}
      <div className="pull-right hidden-xs">
        Develope By Nursan amar
      </div>
      {/* <!-- Default to the left --> */}
      <strong>Copyright &copy; 2017 <a href="#">ApiBuilder</a>.</strong> All rights reserved.
    </footer>
  )
}

const BoxSmall = (props) => {
  return (
    <div className="col-lg-3 col-xs-6">
      {/* <!-- small box --> */}
      <div className={"small-box "+props.bg}>
        <div className="inner">
          <h3>{props.value}</h3>

          <p>{props.desc}</p>
        </div>
        <div className="icon">
          <i className="ion ion-bag"></i>
        </div>
        <a href="#" className="small-box-footer">More info <i className="fa fa-arrow-circle-right"></i></a>
      </div>
    </div>
  )
}


class AreaChart extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    $(function() {
      var areaChartCanvas = $(this.refs.main).get(0).getContext("2d");
      // This will get the first returned node in the jQuery collection.
      var areaChart = new Chart(areaChartCanvas);

      var areaChartData = {
        labels: this.props.labels,
        datasets: this.props.datasets
      };

          var areaChartOptions = {
            //Boolean - If we should show the scale at all
            showScale: true,
            //Boolean - Whether grid lines are shown across the chart
            scaleShowGridLines: false,
            //String - Colour of the grid lines
            scaleGridLineColor: "rgba(0,0,0,.05)",
            //Number - Width of the grid lines
            scaleGridLineWidth: 1,
            //Boolean - Whether to show horizontal lines (except X axis)
            scaleShowHorizontalLines: true,
            //Boolean - Whether to show vertical lines (except Y axis)
            scaleShowVerticalLines: true,
            //Boolean - Whether the line is curved between points
            bezierCurve: true,
            //Number - Tension of the bezier curve between points
            bezierCurveTension: 0.3,
            //Boolean - Whether to show a dot for each point
            pointDot: false,
            //Number - Radius of each point dot in pixels
            pointDotRadius: 4,
            //Number - Pixel width of point dot stroke
            pointDotStrokeWidth: 1,
            //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
            pointHitDetectionRadius: 20,
            //Boolean - Whether to show a stroke for datasets
            datasetStroke: true,
            //Number - Pixel width of dataset stroke
            datasetStrokeWidth: 2,
            //Boolean - Whether to fill the dataset with a color
            datasetFill: false,
            //String - A legend template
            legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].lineColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",
            //Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
            maintainAspectRatio: true,
            //Boolean - whether to make the chart responsive to window resizing
            responsive: true
          };
      areaChart.Line(areaChartData,areaChartOptions);
    }.bind(this));
  }

  render(){
    return (
      <div className="chart">
        <canvas id="areaChart" ref="main" style={{height:"250px"}}></canvas>
      </div>
    )
  }
}

const BoxDefault = (props) => {
  return (
  <div className="col-xs-12">
      <div className="box box-default">
        <div className="box-header with-border">
          <i className="fa fa-warning"></i>

          <h3 className="box-title">{props.tittle}</h3>
        </div>
        {/* <!-- /.box-header --> */}
        <div className="box-body">
          {props.children}
        </div>
        {/* <!-- /.box-body --> */}
      </div>
      {/* <!-- /.box --> */}
     </div>
  )
}

const LoginLogo = (props) => {
  return (
    <div className="login-logo">
      <a href="#">{props.children}</a>
    </div>
  )
}

const SocialAuth = (props) => {
  return (
    <div className="social-auth-links text-center">
      <p>- OR -</p>
      <a href="#" className="btn btn-block btn-social btn-facebook btn-flat"><i className="fa fa-facebook"></i> Sign in using
        Facebook</a>
      <a href="#" className="btn btn-block btn-social btn-google btn-flat"><i className="fa fa-google-plus"></i> Sign in using
        Google+</a>
    </div>
  )
}

const LoginBody = (props) => {
  console.log(props);
  return (
    <div className="login-box-body">
      <p className="login-box-msg">Sign in to start your session</p>

      <form onSubmit={props.login} method="post">
        <div className="form-group has-feedback">
          <input type="email" className="form-control" placeholder="Email" />
          <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
        </div>
        <div className="form-group has-feedback">
          <input type="password" className="form-control" placeholder="Password" />
          <span className="glyphicon glyphicon-lock form-control-feedback"></span>
        </div>
        <div className="row">
          <div className="col-xs-8">
            <div className="checkbox icheck">
              <label>
                <input type="checkbox" /> Remember Me
              </label>
            </div>
          </div>
          {/* <!-- /.col --> */}
          <div className="col-xs-4">
            <a className="btn btn-primary btn-block btn-flat" onClick={() => {
              props.login
            }}>Sign In</a>
            {/* <button type="submit" className="btn btn-primary btn-block btn-flat">Sign In</button> */}
          </div>
          {/* <!-- /.col --> */}
        </div>
      </form>

      {props.children}
      {/* <!-- /.social-auth-links --> */}

      <a href="#">I forgot my password</a><br/>
      <a href="register.html" className="text-center">Register a new membership</a>

    </div>
  )
}

const BoxLogin = (props) => {
  return (
    <div className="login-box">

      {props.children}
    </div>
  )
}

const Table = (props) => {
	return (
		<div className="box-body table-responsive no-padding">
              <table className="table table-hover">
                <thead>
                  <tr>
                  	<th>ID</th>
                  	<th>Tabel</th>
                  	<th>Kolom</th>
                    <th>Hits</th>
                  	<th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {props.children}
                </tbody>
              </table>
       </div>
	);

}

const TableRow = (props) => {
	return (
		<tr>
			<td></td>
		</tr>
	);
}

const Alert = (props) => {
  var type = "";
  switch (props.type) {
    case "danger":
      type = "alert-danger";
      break;
    case "info":
      type = "alert-info";
      break;
    case "warning":
      type = "alert-warning";
      break;
    case "succes":
      type = "alert-succes";
      break;
  }
  return (
    <div className={"alert alert-dismissible "+type}>
      <button type="button" className="close" data-dismiss="alert" aria-hidden="true">×</button>
      <h4><i className="icon fa fa-ban"></i>{props.tittle}</h4>
        {props.content}
    </div>
  )
}

/* --------------------- AdminLTE Components  ----------------------->>>>>> */

/* <<<<<<--------------------- Main app ----------------------- */
const HeaderApp = (props) => {
  var id = localStorage.getItem('id');
  var name = localStorage.getItem('name');
  return (
      <HeaderLte>
        <Logo />
        <NavLte>
          <CustomNav>
            <User name={name} image="assets/img/avatar04.png" desc="Admin" />
          </CustomNav>
        </NavLte>
      </HeaderLte>
  )
}

class PageApp extends React.Component {
	constructor(props) {
		super(props);
    if(localStorage.getItem("token") === null){
        window.location.assign("login.html");
    }
    $.ajaxSetup({
      "headers": {
        "authorization": "Bearer "+localStorage.getItem("token"),
        "Content-Type":"application/json",

  },
});
console.log(localStorage.getItem("token"));
		this.state = {
			"isopen":"no",
			"tableName":"",
			"tableColumn":"",
			"forms":"",
			"button":"",
			"data":"",
      "tableData":[],
      "feedback":"",

		};
		this.tableName = this.tableName.bind(this);
		this.tableColumn = this.tableColumn.bind(this);
		this.openForms = this.openForms.bind(this);
		this.submitForm = this.submitForm.bind(this);
    this.deleteTable = this.deleteTable.bind(this);
	}

  searchIndex(id,list){
    var index = -1;
    var list = this.state.tableData;
    var filtered = list.find((item,i) => {
      if (item.id === id) {
        index = i;
        return i;
      }
    });
    return index;
  }

  deleteTable(id){
    var temp = this.state.tableData;
    $.ajax({
      "url":"http://localhost/apibud/table/"+temp[0].id,
      "method": "DELETE",
    }).done(function(res){
      temp.splice(id,1);
      console.log(id,temp);
      this.setState({
        'tableData': temp
      });
    }.bind(this))
  }

  componentDidMount(){
    $.get("http://localhost/apibud/table",function(data){
      var tableList = [];
      data.data.forEach((data) => {
        tableList.push(data);
      })

      this.setState({
        tableData: tableList
      });
      console.log(this.searchIndex('2'));
    }.bind(this))
  }

	tableName(e){
		this.setState({
			"tableName": e.target.value
		});
	}
	tableColumn(e){
		this.setState({
			"tableColumn": e.target.value
		});
	}
	submitForm(){
		var data = [];

		$('form').each(function(){
			var sr = $(this).serializeArray();
			var column = {};
			sr.map((dat) => {
				column[dat.name] = dat.value;
			});
			 data.push(column);
		});

		this.setState({
			"data": data
		});
    var table = {
      "name":this.state.tableName,
      "columns": this.state.tableColumn,
      "data": data,

    }
    console.log(table);
    $.post("http://localhost/apibud/table",JSON.stringify(table)).done(
      function(res) {
        if (res.status === 'ok') {
          var list = this.state.tableData;
            list.push(res.data)
            this.setState({
              'tableData' : list,
              "isopen":"no",
              "tableName":"",
              "tableColumn":"",
              "forms":"",
              "button":"",
              "data":"",

            });
            console.log('asas');
        } else {
          this.setState({
            'feedback': res.desc
          })
        }
      }.bind(this)
    );
	}
	openForms(){
		var forms = [];
		forms.push(
			<div className="row">

				<div className="col-sm-4 col-md-4">
				<label htmlFor="name">Nama</label>
				<input type="text" value="id" className="form-control" disabled name="name" />
				</div>
				<div className="col-sm-4 col-md-4">
				<label htmlFor="constraint">Ukuran</label>
				<input type="number" name="constraint" className="form-control" value="11" disabled />
				</div>
				<div className="col-sm-4 col-md-4">
				<label htmlFor="type">Type</label>
				<select className="form-control" name="type" disabled><option label="VARCHAR">varchar</option><option selected label="INT">int</option></select>
				</div>

		</div>
		);
		for(var i = 0; i < this.state.tableColumn;i++){
			forms.push(
			<div className="row">
			<form>
				<div className="col-sm-4 col-md-4">
				<label htmlFor="name">Nama</label>
				<input type="text" className="form-control" name="name" />
				</div>
				<div className="col-sm-4 col-md-4">
				<label htmlFor="constraint">Ukuran</label>
				<input type="number" name="constraint" className="form-control" />
				</div>
				<div className="col-sm-4 col-md-4">
				<label htmlFor="type">Type</label>
				<select className="form-control" name="type"><option value="VARCHAR">varchar</option><option value="INT">int</option></select>
				</div>
		</form>
		</div>
		);
		}
		var button = <a className="btn btn-primary" onClick={this.submitForm}>Submit</a>;
		this.setState({
			"forms": forms,
			"button": button
		});
	}
	openForm(){
		var status = (this.state.isopen === "yes") ? "no":"yes";
		this.setState({"isopen": status});
	}

	render() {
	var rows = [];
  var feedback = (this.state.feedback !== "") ? <Alert type="danger" tittle="Error" content={this.state.feedback} />: "";
	var data = this.state.tableData;
	data.map((row,key) => {
		rows.push(<tr key={key}><td>{row.id}</td><td>{row.table}</td><td>{row.columns}</td><td>{row.hits}</td><td><a className="btn btn-danger btn-small" onClick={() => {
      console.log('clicked');
      this.deleteTable(key);
		}}><span className="glyphicon glyphicon-trash"></span></a></td></tr>);
	});
	var forms = this.state.forms;
	var button = this.state.button;
	var add = (this.state.isopen === "no") ? null :
      		<BoxDefault tittle="Tambah Table" >
      			<div className="row">
      				<div className="col-xs-5">
      					<input type="text" className="form-control" placeholder="Nama tabel" onChange={this.tableName} value={this.state.tableName} />
      				</div>
      				<div className="col-xs-4 col-md-4 col-lg-4">
      					<input type="number" className="form-control" placeholder="Jumlah kolom" onChange={this.tableColumn} value={this.state.tableColumn} />
      				</div>
      				<div>
      					<a className="btn btn-default" onClick={this.openForms}>Ok</a>
      				</div>
      			</div>
      			<div className="row">
      			</div>
      			<div className="row">
      				<div className="col-sm-12">
                  <div className="clearfix"></div>
      						{forms}
                  <div className="clearfix"></div>
      						{button}
                  <div className="clearfix"></div>
                <span>{feedback}</span>
      				</div>
      			</div>
      		</BoxDefault>
      ;
  return (
    <PageLte header="Menu Tabel" desc="Buat dan hapus tabel">
      <div className="row">
      		<div className="col-md-12 col-sm-12">
      			<a className="btn btn-primary" onClick={this.openForm.bind(this)}>Tambah</a>
      			<p></p>
      		</div>
      	</div>
      	<div className="row">
      		{add}
      	</div>
      	<div className= "row">
      		<BoxDefault tittle="Daftar Table" >
      			<Table>
      				{rows}
      			</Table>
      		</BoxDefault>
       </div>
    </PageLte>
  )
}

}

const SidebarApp = (props) => {
  return (
    <SidebarLte>
      <SidebarMenu header="Menu Utama" desc="menu utama">
        <SidebarList href="react.html" text="Dashboard" />
        <SidebarList href="tabelreact.html" text="Daftar tabel" />
        <SidebarList href="akunreact.html" text="Daftar akun" />
        <SidebarList href="blacklistreact.html" text="Daftar Blacklist" />
        <SidebarList href="tutorialreact.html" text="Tutorial" />
      </SidebarMenu>
    </SidebarLte>
  )
}

const FooterApp = (props) => {
  return (
    <FooterLte />
  )
}

class App extends React.Component {
	render(){
		return <div>
		<HeaderApp />
		<SidebarApp/>
		<PageApp />
		<FooterApp />
		</div>
	}

}
if(localStorage.getItem('token') === null){
    window.location.assign("login.html");
}
if((localStorage.getItem('id') === null) && (localStorage.getItem('name') === null)){
    window.location.assign("login.html");
}
ReactDOM.render(
	<App />,
	document.getElementById("root")
);
