Feature: Get User Spend

  Scenario Outline: I can GET user spending insights for given time period
    Given I have the following from date, <from>
    And I have the following to data, <to>
    When I call "GET" "/emma/users/<userId>/spend"
    Then I should get the expected status code <status>
    And <name> response body should match their expected <responseType>

    Examples:
      | status | userId                               | from                       | to                         | name      | responseType  |
      | 200    | 7a1e6086-89d6-4e7c-8a50-fdc2720ecf4a | '2019-10-24T10:07:46.986Z' | '2020-10-25T10:07:46.986Z' | 'winston' | 'all'         |
      | 200    | 7a1e6086-89d6-4e7c-8a50-fdc2720ecf4a | '2020-10-23T10:07:46.986Z' | '2020-10-25T10:07:46.986Z' | 'winston' | 'twoDays'     |
      | 200    | 7a1e6086-89d6-4e7c-8a50-fdc2720ecf4a | '2020-10-21T10:07:46.986Z' | '2020-10-25T10:07:46.986Z' | 'winston' | 'fourDays'    |
      | 200    | 5d2179e5-9928-469f-b9da-5829d3d297cd | '2019-10-24T10:07:46.986Z' | '2020-10-25T10:07:46.986Z' | 'henry'   | 'all'         |
      | 200    | 5d2179e5-9928-469f-b9da-5829d3d297cd | '2020-10-23T10:07:46.986Z' | '2020-10-25T10:07:46.986Z' | 'henry'   | 'twoDays'     |
      | 200    | 5d2179e5-9928-469f-b9da-5829d3d297cd | '2020-10-21T10:07:46.986Z' | '2020-10-25T10:07:46.986Z' | 'henry'   | 'fourDays'    |
      | 200    | aa9b170f-dc31-483c-9e99-7576081b544b | '2019-10-24T10:07:46.986Z' | '2020-10-25T10:07:46.986Z' | 'john'    | 'all'         |
      | 200    | aa9b170f-dc31-483c-9e99-7576081b544b | '2020-10-23T10:07:46.986Z' | '2020-10-25T10:07:46.986Z' | 'john'    | 'twoDays'     |
      | 200    | aa9b170f-dc31-483c-9e99-7576081b544b | '2020-10-21T10:07:46.986Z' | '2020-10-25T10:07:46.986Z' | 'john'    | 'fourDays'    |
      | 200    | 1a84712a-ccf8-4123-9bbe-4a85b91ae01f | '2019-10-24T10:07:46.986Z' | '2020-10-25T10:07:46.986Z' | 'david'   | 'all'         |
      | 200    | 1a84712a-ccf8-4123-9bbe-4a85b91ae01f | '2020-10-23T10:07:46.986Z' | '2020-10-25T10:07:46.986Z' | 'david'   | 'twoDays'     |
      | 200    | 1a84712a-ccf8-4123-9bbe-4a85b91ae01f | '2020-10-21T10:07:46.986Z' | '2020-10-25T10:07:46.986Z' | 'david'   | 'fourDays'    |
      | 200    | 45ed02f6-c873-46b0-b8e3-68e262f77e4b | '2019-10-24T10:07:46.986Z' | '2020-10-25T10:07:46.986Z' | 'michael' | 'all'         |
      | 200    | 45ed02f6-c873-46b0-b8e3-68e262f77e4b | '2020-10-23T10:07:46.986Z' | '2020-10-25T10:07:46.986Z' | 'michael' | 'twoDays'     |
      | 200    | 45ed02f6-c873-46b0-b8e3-68e262f77e4b | '2020-10-21T10:07:46.986Z' | '2020-10-25T10:07:46.986Z' | 'michael' | 'fourDays'    |

  Scenario Outline: I can GET an empty array if user id is unrecongised or no transactions for time period
    Given I have the following from date, <from>
    And I have the following to data, <to>
    When I call "GET" "/emma/users/<userId>/spend"
    Then I should get the expected status code <status>
    And The response body should be an empty array

    Examples:
      | status | userId                               | from                       | to                         |
      | 200    | 4a1e6086-89d6-4e7c-8a50-fdc2720ecf4b | '2019-10-24T10:07:46.986Z' | '2020-10-25T10:07:46.986Z' |
      | 200    | 45ed02f6-c873-46b0-b8e3-68e262f77e4b | '2018-10-24T10:07:46.986Z' | '2018-10-25T10:07:46.986Z' |

  Scenario Outline: I get an error if I send invalid data types
    Given I have the following from date, <from>
    And I have the following to data, <to>
    When I call "GET" "/emma/users/<userId>/spend"
    Then I should get the expected status code <status>
    And I get the expected error from the swagger validator for <attribute> and <type>

    Examples:
      | status | userId                               | from                       | to                         | attribute | type        |
      | 400    | foobar                               | '2019-10-24T10:07:46.986Z' | '2020-10-25T10:07:46.986Z' | 'userId'  | 'uuid'      |
      | 400    | 45ed02f6-c873-46b0-b8e3-68e262f77e4b | 'foobar'                   | '2020-10-25T10:07:46.986Z' | 'fromDate'| 'date-time' |
