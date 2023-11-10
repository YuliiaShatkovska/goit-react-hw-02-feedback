import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveReview }) => {
  return (
    <ul className={css.button_list}>
      {options.map((option, index) => (
        <li key={index}>
          <button
            className={css.button_feedback}
            onClick={() => onLeaveReview(option)}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FeedbackOptions;
