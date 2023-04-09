import React from 'react';
import { Button, makeStyles, Typography, Grid } from "@material-ui/core";
import axios from 'axios';

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

const MaterialUI: React.FC = () => {
    const [, setData] = React.useState();
    const url = "http://10.2.0.50:4015/save";

    const TeamsSignPost = () => {
        const unixTime = Math.floor(new Date().getTime() / 1000);
        axios.post(url, {
            defect_name: "TeamsSignPost",
            timestamp: unixTime,
        }).then((res) => {
            setData(res.data);
        })
            .catch(() => {
                console.log("通信に失敗しました。");
            });
    };

    const TeamsMeetingPost = () => {
        const unixTime = Math.floor(new Date().getTime() / 1000);
        console.log(unixTime);
        axios.post(url, {
            defect_name: "TeamsMeetingPost",
            timestamp: unixTime,
        }).then((res) => {
            setData(res.data);
        })
            .catch(() => {
                console.log("通信に失敗しました。");
            });
    };

    const TeamsSlowPost = () => {
        const unixTime = Math.floor(new Date().getTime() / 1000);
        console.log(unixTime);
        axios.post(url, {
            defect_name: "TeamsSlowPost",
            timestamp: unixTime,
        }).then((res) => {
            setData(res.data);
        })
            .catch(() => {
                console.log("通信に失敗しました。");
            });
    };

    const TeamsNotChatPost = () => {
        const unixTime = Math.floor(new Date().getTime() / 1000);
        console.log(unixTime);
        axios.post(url, {
            defect_name: "TeamsNotChatPost",
            timestamp: unixTime,
        }).then((res) => {
            setData(res.data);
        })
            .catch(() => {
                console.log("通信に失敗しました。");
            });
    };

    const ZoomSignPost = () => {
        const unixTime = Math.floor(new Date().getTime() / 1000);
        console.log(unixTime);
        axios.post(url, {
            defect_name: "ZoomSignPost",
            timestamp: unixTime,
        }).then((res) => {
            setData(res.data);
        })
            .catch(() => {
                console.log("通信に失敗しました。");
            });
    };

    const ZoomMeetingPost = () => {
        const unixTime = Math.floor(new Date().getTime() / 1000);
        console.log(unixTime);
        axios.post(url, {
            defect_name: "ZoomMeetingPost",
            timestamp: unixTime,
        }).then((res) => {
            setData(res.data);
        })
            .catch(() => {
                console.log("通信に失敗しました。");
            });
    };

    const ZoomNotChatPost = () => {
        const unixTime = Math.floor(new Date().getTime() / 1000);
        console.log(unixTime);
        axios.post(url, {
            defect_name: "ZoomNotChatPost",
            timestamp: unixTime,
        }).then((res) => {
            setData(res.data);
        })
            .catch(() => {
                console.log("通信に失敗しました。");
            });
    };

    const classes = useStyles();
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography
                        className={classes.typoStyle}
                        color="secondary"
                        variant="h5"
                        align="center"
                        noWrap
                    >
                        Teamsでお困りのことはありますか？
                    </Typography>
                </Grid>
            </Grid>

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Button className={classes.btnStyle} variant="contained" color="primary" size="large" onClick={TeamsSignPost}>
                        Teamsにサインインできません。
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <Button className={classes.btnStyle} variant="contained" color="primary" size="large" onClick={TeamsMeetingPost}>
                        Teamsで会議に参加できません。
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <Button className={classes.btnStyle} variant="contained" color="primary" size="large" onClick={TeamsSlowPost}>
                        Teamsの動きが遅いです。
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <Button className={classes.btnStyle} variant="contained" color="primary" size="large" onClick={TeamsNotChatPost}>
                        Teamsでチャットや投稿ができないです。
                    </Button>
                </Grid>
            </Grid>
            <div>
                <br></br>
                <br></br>
            </div>
            <Typography
                className={classes.typoStyle}
                color="secondary"
                variant="h5"
                align="center"
                noWrap
            >
                Zoomでお困りのことはありますか？
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Button className={classes.btnStyle} variant="contained" color="primary" size="large" onClick={ZoomSignPost}>
                        Zoomにサインインできません。
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <Button className={classes.btnStyle} variant="contained" color="primary" size="large" onClick={ZoomMeetingPost}>
                        Zoomで会議に参加できません。
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <Button className={classes.btnStyle} variant="contained" color="primary" size="large" onClick={ZoomNotChatPost}>
                        Zoomの動きが遅いです。
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
};

export default MaterialUI;