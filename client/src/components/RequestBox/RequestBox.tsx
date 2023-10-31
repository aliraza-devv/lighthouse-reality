import React, { useState } from 'react';

import { Request } from '../../types';
import RequestModal from '../UI/Modal/RequestModal/RequestModal';

type RequestBoxProps = {
    request: Request;
};

const RequestBox: React.FC<RequestBoxProps> = ({ request }) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <RequestModal open={open} onClose={() => setOpen(false)} client={request} />
            <div className="card-container--request-box">
                <span className="card-container--request-box-h">Message: </span>
                <p className="card-container--request-box-p">{request.message}</p>
                <button className="btn btn--rec btn--small" onClick={() => setOpen(true)}>
                    Contact
                </button>
            </div>
        </>
    );
};

export default RequestBox;
