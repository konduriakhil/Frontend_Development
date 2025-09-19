const dateInfo = (OriginalComponent) => {

      const getTimeInfo = (props) => {
            const d = new Date();
            let time = d.toLocaleString();

            return <OriginalComponent {...props} time={time} />
      }
      return getTimeInfo;
}

export default dateInfo