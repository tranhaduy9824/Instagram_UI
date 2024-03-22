import { useState } from 'react';
import ModelComment from './ModelComment';

function WrapperModel({ children, customKey }) {
    const [showModel, setShowModel] = useState(false);

    const handleShowModel = () => {
        setShowModel(true);
    };

    const handleCloseModel = () => {
        setShowModel(false);
    };

    return (
        <div>
            {showModel && <ModelComment customKey={customKey} handleCloseModel={handleCloseModel} />}
            <div onClick={handleShowModel}>{children}</div>
        </div>
    );
}

export default WrapperModel;
