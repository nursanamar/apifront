const Logo = (props) => {
  return <a href="index2.html" className="logo">
    {/* <!-- mini logo for sidebar mini 50x50 pixels --> */}
    <span className="logo-mini"><b>A</b>LT</span>
    {/* <!-- logo for regular state and mobile devices --> */}
    <span className="logo-lg"><b>Admin</b>LTE</span>
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
            <a href="#" className="btn btn-default btn-flat">Sign out</a>
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
      <strong>Copyright &copy; 2017 <a href="#">SiBolos</a>.</strong> All rights reserved.
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
  return (
    <div className="login-box-body">
      <p className="login-box-msg">Sign in to start your session</p>

      <form>
        <div className="form-group has-feedback">
          <input type="email" className="form-control" placeholder="Email" value={props.user} onChange={props.actUser} />
          <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
        </div>
        <div className="form-group has-feedback">
          <input type="password" className="form-control" placeholder="Password" value={props.pass} onChange={props.actPass} />
          <span className="glyphicon glyphicon-lock form-control-feedback"></span>
        </div>
        <div className="row">
            <span className="warning">{props.feedback}</span>
          {/* <!-- /.col --> */}
          <div className="col-xs-4">
            <a className="btn btn-primary btn-block btn-flat" onClick={() => {
              props.login()
            }}>Sign In</a>
            {/* <button type="submit" className="btn btn-primary btn-block btn-flat">Sign In</button> */}
          </div>
          {/* <!-- /.col --> */}
        </div>
      </form>

      {props.children}
      {/* <!-- /.social-auth-links --> */}

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

/* --------------------- AdminLTE Components  ----------------------->>>>>> */

/* <<<<<<--------------------- Main app ----------------------- */

class LoginApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      "inputUser":'',
      "inputPass":"",
      "feedback":""
    };
    $.ajaxSetup({
      "headers": {
        "Content-Type":"application/json"
  },
    })
  }

  login(){
    var data = {
      "user": this.state.inputUser,
      "pass": this.state.inputPass
    }
    console.log(data);
    $.post(host+"/login",JSON.stringify(data)).done(function(res){
      var status = res.status;
      var desc = res.desc;
      var token = "";
      var user;
      if (status === "ok") {
        token = res.data.token;
        user = res.data.user;
        localStorage.setItem("token",token);
        localStorage.setItem('id',user.id);
        localStorage.setItem('name',user.name);
        window.location.assign("react.html");
      }else{
        this.setState({
          "feedback": desc
        })
      }
      console.log(res);
    }.bind(this))
  }

  userAct(e){
    this.setState({
      "inputUser": e.target.value
    })
  }

  passAct(e){
    this.setState({
      "inputPass": e.target.value
    })
  }

  render(){
    return (
      <BoxLogin>
        <LoginLogo>
          ApiBuilder
        </LoginLogo>
        <LoginBody feedback={this.state.feedback} user={this.state.inputUser} pass={this.state.inputPass} actPass={this.passAct.bind(this)} actUser={this.userAct.bind(this)} login={this.login.bind(this)} />
      </BoxLogin>
    );
  }
}

class App extends React.Component {
	render(){
		return <div>
		    <LoginApp />
		</div>
	}

}
ReactDOM.render(
	<App />,
	document.getElementById("root")
);
