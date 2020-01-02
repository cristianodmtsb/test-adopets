import React, { Commponent, Component } from "react";
import api from "../../services/api";

import CardPet from "../../components/Card";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pets: null,
      isLoading: true,
      errors: null
    };
  }

  getDerivedState;

  componentDidMount() {
    this.listPets();
  }

  listPets = async () => {
    await api
      .post("pet/search")
      .then(response => {
        this.setState({
          pets: response.data.data.result,
          isLoading: false
        });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  };

  filterPets = async key => {};

  render() {
    const { isLoading, pets } = this.state;
    return (
      <>
        <h1>Feature Pets</h1>
        <div>
          {!isLoading ? (
            pets.map(pet => {
              const { id, name, sex_key, age_key, size_key, status_key } = pet;
              return (
                <CardPet
                  key={id}
                  PetName={name}
                  PetSex={sex_key}
                  PetAge={age_key}
                  PetSize={size_key}
                  PetStatus={status_key}
                />
              );
            })
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </>
    );
  }
}

export default Home;
