import { createDefaultAddressInput } from "@core/values/address.value.mock";
import { ProjectPlanningInput, XXXProjectEntity } from "./project.entity";

describe("XXXProjectEntity", () => {
  describe(".startProjectPlanning creates a project", () => {
    let project: XXXProjectEntity;
    let projectPlanningInput: ProjectPlanningInput;

    beforeAll(() => {
      projectPlanningInput = {
        title: "Kleine Gartensauna",
        location: createDefaultAddressInput(),
      };

      project = XXXProjectEntity.startProjectPlanning(projectPlanningInput);
    });

    it("in a planning state where changes can be made", () => {
      expect(project.inPlanning).toBe(true);
    });

    it("with a unique identifier", () => {
      expect(project.id).toBeDefined();
    });

    it("with a valid address", () => {
      const actualAddress = project.toJSON().location;
      const expectedAddress = projectPlanningInput.location;

      expect(actualAddress.country).toBe(expectedAddress.country);
      expect(actualAddress.city).toBe(expectedAddress.city);
      expect(actualAddress.streetname).toBe(expectedAddress.streetname);
      expect(actualAddress.streetnumber).toBe(expectedAddress.streetnumber);
      expect(actualAddress.zip).toBe(expectedAddress.zip);
    });
  });
});
