import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A First Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Some address 5, 12345 Some City',
        description: 'This is a first meetup!'
    },
    {
        id: 'm2',
        title: 'A Second Meetup',
        image: 'https://th.bing.com/th/id/R.0567f1c61abee28dce624f8e5d1adb49?rik=L5eKggTuzN9mvA&riu=http%3a%2f%2firisholidays.com%2fkeralatourism%2fwp-content%2fuploads%2f2013%2f11%2fkumarakom-backwaters.jpg&ehk=eby9D19HwwGZZa5ViWthqoG3wRHz4WfXG2bqET6zym8%3d&risl=&pid=ImgRaw&r=0',
        address: 'Kochi address 5, 12345 Some City',
        description: 'This is a Second meetup!'
    }
]

function HomePage(props) {
    return <MeetupList meetups={props.meetups} />;
}

// export async function getServerSideProps(context) {
//     const req = context.req;
//     const res = context.res;

//     // fetch data from API

//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         }
//     };
// }

export async function getStaticProps() {
    // fetch data from an API
    return {
        props: {
            meetups: DUMMY_MEETUPS
        },
        revalidate: 1
    };
}

export default HomePage;