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

    let labels = []
    let dataSet = []
    let backgroundColor = []
    languages.map( (lang,index) => {
        labels.push(lang)
        backgroundColor.push(getRandomColor())
    })

    const data = {
        labels: labels,
        datasets: [
          {
            label: 'Repo Languages',
            data: [10, 1, 5, 2, 1, 4, 7],
            backgroundColor: backgroundColor,
            borderWidth: 1,
          },
        ],
      };

  return(
  <>
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