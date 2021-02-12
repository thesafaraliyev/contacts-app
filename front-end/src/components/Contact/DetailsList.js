import React from 'react';

import {List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

import MailOutlinedIcon from '@material-ui/icons/MailOutlined';
import CakeOutlinedIcon from '@material-ui/icons/CakeOutlined';
import LinkOutlinedIcon from '@material-ui/icons/LinkOutlined';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import BusinessOutlinedIcon from '@material-ui/icons/BusinessOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';


const useStyles = makeStyles((theme) => ({
    item: {
        height: theme.spacing(4.5),
    },
    itemText: {
        display: 'flex',
    },
}));

const dot = String.fromCharCode(183);


const secondaryTextStyles = makeStyles((theme) => ({
    root: {
        '& > span': {
            marginLeft: theme.spacing(0.5),
        },
    },
}));

const SecondaryText = ({text}) => {
    if (!text) {
        return null;
    }

    const classes = secondaryTextStyles();
    return (
        <span className={classes.root}>
            <span>{dot}</span>
            <span>{text}</span>
        </span>
    );
}

const prepJobAndCompanyText = contact => {
    const hasJobTitle = contact.jobTitle.length
    const hasCompany = contact.company.length;

    if (hasJobTitle && hasCompany) {
        return `${contact.jobTitle}, ${contact.company}`
    } else if (hasJobTitle && !hasCompany) {
        return contact.jobTitle;
    } else if (!hasJobTitle && hasCompany) {
        return contact.company;
    }

    return null;
}


const DetailsList = ({contact}) => {
    const classes = useStyles();
    const jobAndCompanyText = prepJobAndCompanyText(contact);


    return (
        <List dense>
            {contact.numbers.map((row, index) => (
                <ListItem key={index} className={classes.item}>
                    {index === 0 && <ListItemIcon><PhoneOutlinedIcon fontSize='small'/></ListItemIcon>}
                    <ListItemText
                        className={classes.itemText}
                        inset={index > 0}
                        primary={row.number}
                        secondary={<SecondaryText text={row.label}/>}
                    />
                </ListItem>
            ))}

            {contact.emails.map((row, index) => (
                <ListItem key={index} className={classes.item}>
                    {index === 0 && <ListItemIcon><MailOutlinedIcon fontSize='small'/></ListItemIcon>}
                    <ListItemText
                        className={classes.itemText}
                        inset={index > 0}
                        primary={row.email}
                        secondary={<SecondaryText text={row.label}/>}
                    />
                </ListItem>
            ))}

            {contact.address.length > 0 && <ListItem>
                <ListItemIcon><LocationOnOutlinedIcon fontSize='small'/></ListItemIcon>
                <ListItemText primary={contact.address}/>
            </ListItem>}

            {jobAndCompanyText && <ListItem>
                <ListItemIcon><BusinessOutlinedIcon fontSize='small'/></ListItemIcon>
                <ListItemText primary={jobAndCompanyText}/>
            </ListItem>}

            {contact.birthday.length > 0 && <ListItem>
                <ListItemIcon><CakeOutlinedIcon fontSize='small'/></ListItemIcon>
                <ListItemText primary={contact.birthday}/>
            </ListItem>}

            {contact.websites.map((website, index) => (
                <ListItem key={index} className={classes.item}>
                    {index === 0 && <ListItemIcon><LinkOutlinedIcon fontSize='small'/></ListItemIcon>}
                    <ListItemText
                        className={classes.itemText}
                        inset={index > 0}
                        primary={website.name}
                        secondary={<SecondaryText text={website.label}/>}/>
                </ListItem>
            ))}
        </List>
    );
}


export default React.memo(DetailsList);