const Child = (props) => {

    console.log(props);
    // console.log(props.children);

    const childData = 'Monu';

    const parentDataInChild = props.passDataToChild;

    // step 2
    const sendDataToParent = () => {
        console.log(childData);
        // step 3
        props.passDataToParent(childData);
    };

    return (
        <div>
            <h1>Child Component</h1>
            <p>Child data in child: {childData}</p>
            <p>Parent data in child: {parentDataInChild}</p>
            {/* step 1 */}
            <button onClick={sendDataToParent} >Send</button>
        </div>
    );

};

export default Child;