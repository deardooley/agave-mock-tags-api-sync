
/*
 * Agave Tagging API
 *
 * This is a mockup of a simple tagging api you can use to create loose associations between platform resources.
 */

state.tags = state.tags || []

var _mock = require("./routes/_mock.js")

/* Route definition styles:
 *
 *	define(path, method, function)
 *	soap(path, soapAction, function)
 *
 */
Sandbox.define("/mock/tags", "GET", _mock.getMockTags);
Sandbox.define("/mock/tags", "POST", _mock.postMockTags);
Sandbox.define("/mock/tags/{tagId}", "GET", _mock.getMockTags2);
Sandbox.define("/mock/tags/{tagId}", "PUT", _mock.putMockTags);
Sandbox.define("/mock/tags/{tagId}", "DELETE", _mock.deleteMockTags);
Sandbox.define("/mock/tags/{tagId}/resources", "GET", _mock.getMockTagsResources);
Sandbox.define("/mock/tags/{tagId}/resources", "POST", _mock.postMockTagsResources);
Sandbox.define("/mock/tags/{tagId}/resources", "DELETE", _mock.deleteMockTagsResources);
Sandbox.define("/mock/tags/{tagId}/resources/{uuid}", "GET", _mock.getMockTags3);
Sandbox.define("/mock/tags/{tagId}/resources/{uuid}", "PUT", _mock.putMockTags2);
Sandbox.define("/mock/tags/{tagId}/resources/{uuid}", "DELETE", _mock.deleteMockTags2);
Sandbox.define("/mock/tags/{tagId}/pems", "GET", _mock.getMockTagsPems);
Sandbox.define("/mock/tags/{tagId}/pems", "POST", _mock.postMockTagsPems);
Sandbox.define("/mock/tags/{tagId}/pems", "DELETE", _mock.deleteMockTagsPems);
Sandbox.define("/mock/tags/{tagId}/pems/{username}", "GET", _mock.getMockTags4);
Sandbox.define("/mock/tags/{tagId}/pems/{username}", "POST", _mock.postMockTags2);
Sandbox.define("/mock/tags/{tagId}/pems/{username}", "DELETE", _mock.deleteMockTags3);