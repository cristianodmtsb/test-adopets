import React, { Commponent, Component } from "react";
import api from "../../services/api";

import CardPet from "../../components/Card";
import Filter from "../../components/filter";

import { Select } from "antd";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pets: null,
      isLoading: true,
      errors: null,
      search: {}
    };
  }

  async componentDidMount() {
    await api
      .post("pet/search")
      .then(response => {
        this.setState({
          pets: response.data.data.result,
          isLoading: false
        });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }

  refreshlistPets = async () => {
    await api
      .post("pet/search", { search: this.state.search })
      .then(response => {
        this.setState({
          pets: response.data.data.result,
          isLoading: false
        });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  };

  filterSexPets = (key, e) => {
    if (e === "all") {
      this.setState(
        {
          search: {},
          isLoading: true
        },
        () => {
          this.refreshlistPets();
        }
      );
    } else {
      this.setState(
        {
          search: { ...this.state.search, [key]: e },
          isLoading: true
        },
        () => {
          this.refreshlistPets();
        }
      );
    }
  };

  render() {
    const { isLoading, pets } = this.state;
    const { Option } = Select;
    console.log(this.state.search);
    return (
      <>
        <h1>Feature Pets</h1>
        <Filter handleChange={this.filterSexPets} />
        <div>
          {!isLoading ? (
            pets.map(pet => {
              return (
                <CardPet
                  key={pet.id}
                  PetName={pet.name}
                  PetSex={pet.sex_key}
                  PetAge={pet.age_key}
                  PetSize={pet.size_key}
                  PetStatus={pet.status_key}
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
