import axios from 'axios';
import { Line } from 'react-chartjs-2';
import moment from 'moment';
import { useState, useEffect } from 'react';
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
    btnStyle: {
        background: "green",
        padding: "10px 10px 10px 10px",
        maxWidth: "330px",
        maxHeight: "50px",
        minWidth: "330px",
        minHeight: "20px"
    },
    typoStyle: {
        color: "white",
    },
});


const ZoomPlot = () => {
    const [sdata, setSData] = useState<number[]>([]);
    const [mdata, setMData] = useState<number[]>([]);
    const [cdata, setCData] = useState<number[]>([]);

    const [startDate, setStartDate] = useState(moment().subtract(1, 'hour').toDate());
    const [endDate, setEndDate] = useState(new Date());

    useEffect(() => {
        const fetchData = async () => {
            try {
                const sign = await axios.get('http://10.2.0.50:4015/zoom_sign');
                const rawsign = sign.data;

                const meeting = await axios.get('http://10.2.0.50:4015/zoom_meeting');
                const rawmeeting = meeting.data;

                const notchat = await axios.get('http://10.2.0.50:4015/zoom_notchat');
                const rawnotchat = notchat.data;


                // データを10分間隔で集計する
                const interval = 10 * 60 * 1000;
                const signcounts: number[] = [];

                for (let i = startDate.getTime(); i <= endDate.getTime(); i += interval) {
                    const count = rawsign.filter((item: any) => {
                        const itemDate = moment(item.timestamp).toDate();
                        return itemDate.getTime() >= i && itemDate.getTime() < i + interval;
                    }).length;

                    signcounts.push(count);
                }

                setSData(signcounts);

                const meetingcounts: number[] = [];

                for (let i = startDate.getTime(); i <= endDate.getTime(); i += interval) {
                    const count = rawmeeting.filter((item: any) => {
                        const itemDate = moment(item.timestamp).toDate();
                        return itemDate.getTime() >= i && itemDate.getTime() < i + interval;
                    }).length;

                    meetingcounts.push(count);
                }

                setMData(meetingcounts);

                const notchatcounts: number[] = [];

                for (let i = startDate.getTime(); i <= endDate.getTime(); i += interval) {
                    const count = rawnotchat.filter((item: any) => {
                        const itemDate = moment(item.timestamp).toDate();
                        return itemDate.getTime() >= i && itemDate.getTime() < i + interval;
                    }).length;

                    notchatcounts.push(count);
                }

                setCData(notchatcounts);



            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [startDate, endDate]);

    const chartData = {
        labels: [...Array(sdata.length)].map((_, i) => moment(startDate).add(i * 10, 'minutes').format('HH:mm')),
        datasets: [
            {
                label: 'サインイン不可件数',
                data: sdata,
                fill: false,
                backgroundColor: "rgb(255, 90, 132)",
                borderColor: "rgba(255, 90, 132, 0.2)",
                tension: 0.1,
            },
            {
                label: '会議参加不可件数',
                data: mdata,
                fill: false,
                backgroundColor: "rgb(0, 191, 255)",
                borderColor: "rgba(0, 191, 255, 0.2)",
                tension: 0.1,
            },
            {
                label: 'スロー件数',
                data: cdata,
                fill: false,
                backgroundColor: "rgb(255, 255, 0)",
                borderColor: "rgba(255, 255, 0, 0.2)",
                tension: 0.1,
            },
        ],
    };

    const classes = useStyles();
    return (
        <div>
            <Typography className={classes.typoStyle}>
                <div>
                    <label>Start Date:</label>
                    <input type="datetime-local" value={moment(startDate).format('YYYY-MM-DDTHH:mm')} onChange={(e) => setStartDate(moment(e.target.value).toDate())} />
                </div>
                <div>
                    <label>End Date:</label>
                    <input type="datetime-local" value={moment(endDate).format('YYYY-MM-DDTHH:mm')} onChange={(e) => setEndDate(moment(e.target.value).toDate())} />
                </div>
            </Typography>
            <Line data={chartData} />
        </div>
    );
};

export default ZoomPlot;