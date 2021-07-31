import { Doughnut } from 'react-chartjs-2';

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}



const LanguageChart = ({languages}) => {

    // console.log(languages)

    let labels = []
    let dataSet = []
    let backgroundColor = []

    for (const [key, value] of Object.entries(languages)) {
        // console.log(`${key}: ${value}`);
        labels.push(key)
        dataSet.push(value)
        backgroundColor.push(getRandomColor())
      }


    const data = {
        labels: labels,
        datasets: [
          {
            label: 'Repo Languages',
            data: dataSet,
            backgroundColor: backgroundColor,
            borderWidth: 1,
          },
        ],
      };

  return(
  <>
    <p className="text-center text-sm font-semibold mb-2">Github Repo Languages</p>
    <Doughnut data={data} options={{
        plugins: {
            legend: {
                display: false
             }
        }
    }}/>
  </>
)}

export default LanguageChart