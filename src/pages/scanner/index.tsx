import { useTranslation } from 'react-i18next';
import { Button, Card, Typography } from '@mui/material';
import ScannerSection from './components/scanner';
import { useState } from 'react';

const ScannerPage = () => {
    const [showScanner, setShowScanner] = useState(false);

    const { t } = useTranslation();

    const openScanner = () => setShowScanner(true);
    const closeScanner = () => setShowScanner(false);
    
    return (
        <Card
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 6,
                height: "87vh"
            }}
        >
            <Typography variant={"h4"}>
                {t("confirmPresence")}
            </Typography>
            <Button
                variant={"contained"}
                onClick={openScanner}
            >
                {t("scan")}
            </Button>
            <ScannerSection
                show={showScanner}
                onClose={closeScanner}
            />
        </Card>
    );
}

export default ScannerPage;