import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from '../store/store';
import { fetchCandidates } from '../store/features/CandidateSlice';
import Candidate from '../components/Candidate';
import { useLocation, useNavigate } from "react-router-dom";
import Statistics from '../components/statistics/Statistics';
const VotePage = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>();
    const user = useSelector((state: RootState) => state.user.user);
    const { error, status, candidates } = useSelector(
        (state: RootState) => state.candidates
    );
    
    useEffect(() => {
        if (status === "idle") {
      dispatch(fetchCandidates());
    }
}, [dispatch, status]);

return (
    <div>
        
      {user && <h3>Welcome, {user.userName}</h3>} 
      {user?.isAdmin == true && <button onClick={()=>{navigate("/statistics")}}>statistics</button>}
      {status === "pending" && <p>Loading candidates...</p>}
      {status === "rejected" && <p>Error: {error}</p>}
      {status === "fulfilled"   && candidates?.map((candidate) => (
        <Candidate key={candidate._id} candidate={candidate} />
      ))}
    </div>
  );
}

export default VotePage;
