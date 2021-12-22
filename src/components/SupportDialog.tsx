import React, { useContext } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, Button, DialogActions, makeStyles, createStyles, Link } from '@material-ui/core';
import i18next from 'i18next';
import { ConfigContext } from '..';

const useStyles = makeStyles(
    createStyles({
        contactOptionTitle: {
            fontWeight: 'bold',
        },
    }),
);

type SupportDialogProps = {
    handleClose: () => void;
    open: boolean;
};
const SupportDialog = ({ open, handleClose }: SupportDialogProps) => {
    const { state: config } = useContext(ConfigContext);
    const classes = useStyles();

    return (
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth="xs">
            <DialogTitle>{i18next.t('supportDialog.title')}</DialogTitle>
            <DialogContent>
                {config?.contactByMailLink && (
                    <>
                        <DialogContentText className={classes.contactOptionTitle}>{i18next.t('supportDialog.contactByMail')}</DialogContentText>
                        <DialogContentText>
                            <Link href={`mailto:${config.contactByMailLink}`}>{config.contactByMailLink}</Link>
                        </DialogContentText>
                    </>
                )}
                {config?.contactByChatLink && (
                    <>
                        <DialogContentText className={classes.contactOptionTitle}>{i18next.t('supportDialog.contactByChat')}</DialogContentText>
                        <DialogContentText>
                            <Link href={config.contactByChatLink}>{config.contactByChatLink}</Link>
                        </DialogContentText>
                    </>
                )}
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    {i18next.t('supportDialog.close')}
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export { SupportDialog };
