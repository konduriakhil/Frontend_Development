import React, { useState, useEffect } from "react";

// HOC that handles data fetching
const withDataFetching = (WrappedComponent, apiUrl) => {

      return function WithDataFetching(props) {
            
            const [data, setData] = useState([]);
            const [loading, setLoading] = useState(true);
            const [error, setError] = useState(null);

            useEffect(() => {
                  const fetchData = async () => {
                        try {
                              const response = await fetch(apiUrl);
                              if (!response.ok) {
                                    throw new Error("Failed to fetch data");
                              }
                              const result = await response.json();
                              setData(result);
                        } catch (err) {
                              setError(err.message);
                        } finally {
                              setLoading(false);
                        }
                  };

                  fetchData();
            }, [apiUrl]);

            return (
                  <WrappedComponent
                        {...props}
                        data={data}
                        loading={loading}
                        error={error}
                  />
            );
      };
};

export default withDataFetching;
