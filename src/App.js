import { React , Component} from 'react';
//import PropTypes from 'prop-types';
class App extends Component{
    constructor(props){
        super(props);
            this.state = {
                studentData : [],
                act : 0,
                index : ''
            }
        }
        handleSubmit = (e)=> {
             e.preventDefault();
            let studentData =this.state.studentData;
            let name = this.refs.txtName.value;
            let enrollmentno = this.refs.txtEnrollmentno.value;
            //let empty = this.refs.value;
            
            if(this.state.act === 0)
            {
            let newstudent = {
                 "name" : name,
                 "enrollmentno" : enrollmentno,
                 //"empty" : empty
            }
            studentData.push(newstudent);
            }
            else
            {
              let index = this.state.index;
              studentData[index].name = name;
              studentData[index].enrollmentno = enrollmentno;
              //studentData[index].empty = empty;
            }
            this.setState({
                studentData : studentData,
                act : 0 
            });

            this.refs.myForm.reset();
                      
        }
        handleEdit = (i)=> {
          let studentData = this.state.studentData[i];
          this.refs.txtName.value = studentData.name;
          this.refs.txtEnrollmentno.value = studentData.enrollmentno;

          this.setState({
            act : 1,
            index : i
           
          });
        }
        handleDelete = (i)  => {
          let studentData = this.state.studentData;
          studentData.splice(i,1);
          this.setState({
            studentData : studentData
          });
        }
render(){
    let studentData = this.state.studentData;
    //const {proptypes} = this.props;
    return(
<div>
    <h1>{this.state.title}</h1>
    <form ref="myForm">
    <label>Name : </label>
    <input type="text" ref = "txtName" placeholder='Enter Name'></input><br></br>
    <label>Enrollment : </label>
    <input type="enrollmentno" ref = "txtEnrollmentno" placeholder='Enter Enrollmentno'></input><br></br>
    <button onClick={e =>this.handleSubmit(e)}>Save</button>
    
    </form>
        <table>
            <tr>
                <th>Name</th>
                <th>Enrollmentno</th>
            </tr>
            {
                studentData.map( (data, i) =>
                <tr key={i}>
                <td>{data.name}</td>
                <td>{data.enrollmentno}</td>
                <td>
                      <button onClick={e =>this.handleEdit(i)}>Edit</button>
                </td>
                  <td>
                  <button onClick={e =>this.handleDelete(i)}>Delete</button>
                </td>
                   </tr>
                    
                )
            }
        </table>
</div>
    )
}
}
export default App;
